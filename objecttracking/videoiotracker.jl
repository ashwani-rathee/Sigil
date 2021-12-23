using GLMakie, VideoIO
using Images, ImageDraw, BoundingSphere
using Printf

"""
function objecttracker(img)

Return image which tracks green colored objects 
from the input image

## Details
Steps

- Converts image to HSV space
- Set HSV value range to create binary mask
  which can identify green objects
- Find contours from that binary mask
- Pick the largest contour area and find its 
  bounding box
- Draw the bounding box on the input image
- return the resultant image

"""
function objecttracker(
    img,
    h = 150,
    s = 150,
    v = 255,
    lh = 120,
    ls = 80,
    lv = 90,
    boundingboxvar = 10,
)
    hsv_img = HSV.(img)
    channels = channelview(float.(hsv_img))
    hue_img = channels[1, :, :]
    val_img = channels[3, :, :]
    satur_img = channels[2, :, :]
    mask = zeros(size(hue_img))
    # h, s, v = 150,  150, 255
    # h1, s1, v1 = 120,  80, 90
    h, s, v = h, s, v
    h1, s1, v1 = lh, ls, lv
    ex = boundingboxvar
    for ind in eachindex(hue_img)
        if hue_img[ind] <= h && satur_img[ind] <= s / 255 && val_img[ind] <= v / 255
            if hue_img[ind] >= h1 && satur_img[ind] >= s1 / 255 && val_img[ind] >= v1 / 255
                mask[ind] = 1
            end
        end
    end
    cnts1 = find_contours(mask)
    if length(cnts1) != 0
        nums = findmax(map(x -> length(x), cnts1))[2]
        maxcontourarea = cnts1[nums]
        pts = map(x -> [float(x[1]), float(x[2])], maxcontourarea)
        center, radius = boundingsphere(pts)
        center = [round(Int, center[1]), round(Int, center[2])]
        radius = round(Int, radius)
        # draw_contours(img, RGB(1,0,0), cnts1)
        final_image = draw(
            RGB{N0f8}.(img),
            Polygon(
                RectanglePoints(
                    ImageDraw.Point(center[2] - radius - ex, center[1] - radius - ex),
                    ImageDraw.Point(center[2] + radius + ex, center[1] + radius + ex),
                ),
            ),
            RGB(0, 1, 0),
        )
        # final_image = image
    else
        final_image = img
    end
    return final_image
end;

# rotate direction clocwise
function clockwise(dir)
    return (dir) % 8 + 1
end

# rotate direction counterclocwise
function counterclockwise(dir)
    return (dir + 6) % 8 + 1
end

# move from current pixel to next in given direction
function move(pixel, image, dir, dir_delta)
    newp = pixel + dir_delta[dir]
    height, width = size(image)
    if (0 < newp[1] <= height) && (0 < newp[2] <= width)
        if image[newp] != 0
            return newp
        end
    end
    return CartesianIndex(0, 0)
end

# finds direction between two given pixels
function from_to(from, to, dir_delta)
    delta = to - from
    return findall(x -> x == delta, dir_delta)[1]
end

function detect_move(image, p0, p2, nbd, border, done, dir_delta)
    dir = from_to(p0, p2, dir_delta)
    moved = clockwise(dir)
    p1 = CartesianIndex(0, 0)
    while moved != dir ## 3.1
        newp = move(p0, image, moved, dir_delta)
        if newp[1] != 0
            p1 = newp
            break
        end
        moved = clockwise(moved)
    end

    if p1 == CartesianIndex(0, 0)
        return
    end

    p2 = p1 ## 3.2
    p3 = p0 ## 3.2
    done .= false
    while true
        dir = from_to(p3, p2, dir_delta)
        moved = counterclockwise(dir)
        p4 = CartesianIndex(0, 0)
        done .= false
        while true ## 3.3
            p4 = move(p3, image, moved, dir_delta)
            if p4[1] != 0
                break
            end
            done[moved] = true
            moved = counterclockwise(moved)
        end
        push!(border, p3) ## 3.4
        if p3[1] == size(image, 1) || done[3]
            image[p3] = -nbd
        elseif image[p3] == 1
            image[p3] = nbd
        end

        if (p4 == p0 && p3 == p1) ## 3.5
            break
        end
        p2 = p3
        p3 = p4
    end
end


function find_contours(image)
    nbd = 1
    lnbd = 1
    image = Float64.(image)
    contour_list = Vector{typeof(CartesianIndex[])}()
    done = [false, false, false, false, false, false, false, false]

    # Clockwise Moore neighborhood.
    dir_delta = [
        CartesianIndex(-1, 0),
        CartesianIndex(-1, 1),
        CartesianIndex(0, 1),
        CartesianIndex(1, 1),
        CartesianIndex(1, 0),
        CartesianIndex(1, -1),
        CartesianIndex(0, -1),
        CartesianIndex(-1, -1),
    ]

    height, width = size(image)

    for i = 1:height
        lnbd = 1
        for j = 1:width
            fji = image[i, j]
            is_outer = (image[i, j] == 1 && (j == 1 || image[i, j-1] == 0)) ## 1 (a)
            is_hole = (image[i, j] >= 1 && (j == width || image[i, j+1] == 0))

            if is_outer || is_hole
                # 2
                border = CartesianIndex[]

                from = CartesianIndex(i, j)

                if is_outer
                    nbd += 1
                    from -= CartesianIndex(0, 1)

                else
                    nbd += 1
                    if fji > 1
                        lnbd = fji
                    end
                    from += CartesianIndex(0, 1)
                end

                p0 = CartesianIndex(i, j)
                detect_move(image, p0, from, nbd, border, done, dir_delta) ## 3
                if isempty(border) ##TODO
                    push!(border, p0)
                    image[p0] = -nbd
                end
                push!(contour_list, border)
            end
            if fji != 0 && fji != 1
                lnbd = abs(fji)
            end

        end
    end
    return contour_list
end

# a contour is a vector of 2 int arrays
function draw_contour(image, color, contour)
    for ind in contour
        image[ind] = color
    end
end
function draw_contours(image, color, contours)
    for cnt in contours
        draw_contour(image, color, cnt)
    end
end

println("Step 1: open camera")
f = VideoIO.opencamera()

println("Step 2: Set original image shower")

img = read(f)
fig = Figure(size = (1000, 700), title = "Object Tracker")
ax = GLMakie.Axis(
    fig[1, 1],
    aspect = DataAspect(),
    xlabel = "x",
    xlabelcolor = :black,
    ylabel = "y label",
    ylabelcolor = :white,
    title = "Input Image",
    backgroundcolor = :black,
    labelcolor = :white,
)
ax2 = GLMakie.Axis(
    fig[2, 1],
    aspect = DataAspect(),
    xlabel = "x label",
    ylabel = "y label",
    title = "Resultant Image",
    backgroundcolor = :gray80,
)
Textbox(
    fig[1, 2],
    placeholder = "Steps \n - Converts image to HSV space \n - Set HSV value range to create \n binary mask which can identify green objects \n - Find contours from that binary mask \n - Pick the largest contour area and \n find its bounding box \n - Draw the bounding box on the input image \n - return the resultant image \n ",
    bordercolor = RGB(0),
    textcolor = :black,
    textcolor_placeholder = :black,
)
lsgrid = labelslidergrid!(
    fig,
    [
        "Upper Hue Limit",
        "Upper Saturation Limit",
        "Upper Value Limit",
        "Lower Hue Limit",
        "Lower Saturation Limit",
        "Lower Value Limit",
        "BoundingBox Size",
    ],
    [0:1:255, 0:1:255, 0:1:255, 0:1:255, 0:1:255, 0:1:255, 10:1:30];
    formats = [
        x -> "$(round(x, digits = 1))$s" for
        s in ["UpH", "UpS", "UpV", "LowH", "LowS", "LowV", "Pix"]
    ],
    width = 350,
    tellheight = false,
)
fig[2, 2] = lsgrid.layout
sliderobservables = [s.value for s in lsgrid.sliders]
hidedecorations!(ax)
hidedecorations!(ax2)
node = Node(rotr90(img))
node2 = Node(rotr90(img))
makieimg = image!(ax, node)
makieimg2 = image!(ax2, node2)

running = Node(false)

function toggle_running()
    running[] = !running[] # or more complex logic
    set_close_to!(lsgrid.sliders[1], 150)
    set_close_to!(lsgrid.sliders[2], 150)
    set_close_to!(lsgrid.sliders[3], 255)
    set_close_to!(lsgrid.sliders[4], 120)
    set_close_to!(lsgrid.sliders[5], 80)
    set_close_to!(lsgrid.sliders[6], 90)
    set_close_to!(lsgrid.sliders[7], 10)
end
Textbox(
    fig[3, 1],
    placeholder = "Object Tracker using VideoIO.jl,\n Makie.jl and Images.jl",
    bordercolor = RGB(0),
    textcolor = :black,
    textcolor_placeholder = :black,
)
fig[3, 2] = buttongrid = GridLayout()
btn = Button(fig, label = @lift($running ? "Usedefaults" : "Usedefaults "))
buttongrid[1, 1:1] = [btn]

on(btn.clicks) do _
    toggle_running()
end

# h, s, v = 150,  150, 255
# h1, s1, v1 = 120,  80, 90
set_close_to!(lsgrid.sliders[1], 150)
set_close_to!(lsgrid.sliders[2], 150)
set_close_to!(lsgrid.sliders[3], 255)
set_close_to!(lsgrid.sliders[4], 120)
set_close_to!(lsgrid.sliders[5], 80)
set_close_to!(lsgrid.sliders[6], 90)
set_close_to!(lsgrid.sliders[7], 10)
zebra = 0
display(fig)
while isopen(f)
    global zebra = zebra + 1
    read!(f, img)
    data = [150, 150, 255, 120, 80, 90, 10]
    node[] = rotr90(img)
    lift(sliderobservables...) do slvalues...
        data = [slvalues...]
    end

    node2[] = rotr90(
        objecttracker(img, data[1], data[2], data[3], data[4], data[5], data[6], data[7]),
    )
    # save(@sprintf("test_%04d.png", i) , fig.scene)
    sleep(1 / VideoIO.framerate(f))
end
