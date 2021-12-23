### A Pluto.jl notebook ###
# v0.17.3

using Markdown
using InteractiveUtils

# This Pluto notebook uses @bind for interactivity. When running this notebook outside of Pluto, the following 'mock version' of @bind gives bound variables a default value (instead of an error).
macro bind(def, element)
    quote
        local iv = try Base.loaded_modules[Base.PkgId(Base.UUID("6e696c72-6542-2067-7265-42206c756150"), "AbstractPlutoDingetjes")].Bonds.initial_value catch; b -> missing; end
        local el = $(esc(element))
        global $(esc(def)) = Core.applicable(Base.get, el) ? Base.get(el) : iv(el)
        el
    end
end

# ╔═╡ 4934e4de-b03d-419f-a076-9a8116f5ddf5
begin
using Pkg; 
Pkg.activate(".") ;
end

# ╔═╡ 0814234d-459a-404b-9253-7f7665ea6a38
begin
Pkg.add(PackageSpec(url="https://github.com/Pocket-titan/DarkMode"))
import DarkMode
DarkMode.enable()
end

# ╔═╡ 14519106-d4cf-4a77-acca-a22b7c426334
using Images, ImageMagick, ImageDraw,  BoundingSphere

# ╔═╡ f5642319-05ee-4731-ad26-80bcd4f6aa7b
begin

### Important
### Webcam related utils
	
function camera_input(;max_size=200, default_url="https://i.imgur.com/SUmi94P.png")
"""
<span class="pl-image waiting-for-permission">
<style>
	
	.pl-image.popped-out {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 5;
	}
	.pl-image #video-container {
		width: 250px;
	}
	.pl-image video {
		# border-radius: 1rem 1rem 0 0;
	}
	.pl-image.waiting-for-permission #video-container {
		display: none;
	}
	.pl-image #prompt {
		display: none;
	}
	.pl-image.waiting-for-permission #prompt {
		width: 250px;
		height: 200px;
		display: grid;
		place-items: center;
		font-family: monospace;
		font-weight: bold;
		text-decoration: underline;
		cursor: pointer;
		border: 5px dashed rgba(0,0,0,.5);
	}
	.pl-image video {
		display: block;
	}
	.pl-image .bar {
		width: inherit;
		display: flex;
		z-index: 6;
	}
	.pl-image .bar#top {
		position: absolute;
		flex-direction: column;
	}
	
	.pl-image .bar#bottom {
		background: black;
		# border-radius: 0 0 1rem 1rem;
	}
	.pl-image .bar button {
		flex: 0 0 auto;
		background: rgba(255,255,255,.8);
		border: none;
		width: 2rem;
		height: 2rem;
		border-radius: 100%;
		cursor: pointer;
		z-index: 7;
	}
	.pl-image .bar button#shutter {
		width: 3rem;
		height: 3rem;
		margin: -1.5rem auto .2rem auto;
	}
	.pl-image video.takepicture {
		animation: pictureflash 0ms linear;
	}
	@keyframes pictureflash {
		0% {
			filter: grayscale(1.0) contrast(2.0);
		}
		100% {
			filter: grayscale(0.0) contrast(1.0);
		}
	}
</style>
	<div id="video-container">
		<div id="top" class="bar">
			<button id="stop" title="Stop video">✖</button>
			<button id="pop-out" title="Pop out/pop in">⏏</button>
		</div>
		<video playsinline autoplay></video>
		<div id="bottom" class="bar">
		<button id="shutter" title="Click to take a picture">📷</button>
		</div>
	</div>
		
	<div id="prompt">
		<span>
		Enable webcam
		</span>
	</div>
<script>
	// based on https://github.com/fonsp/printi-static (by the same author)
	const span = currentScript.parentElement
	const video = span.querySelector("video")
	const popout = span.querySelector("button#pop-out")
	const stop = span.querySelector("button#stop")
	const shutter = span.querySelector("button#shutter")
	const prompt = span.querySelector(".pl-image #prompt")
	const maxsize = $(max_size)
	const send_source = (source, src_width, src_height) => {
		const scale = Math.min(1.0, maxsize / src_width, maxsize / src_height)
		const width = Math.floor(src_width * scale)
		const height = Math.floor(src_height * scale)
		const canvas = html`<canvas width=\${width} height=\${height}>`
		const ctx = canvas.getContext("2d")
		ctx.drawImage(source, 0, 0, width, height)
		span.value = {
			width: width,
			height: height,
			data: ctx.getImageData(0, 0, width, height).data,
		}
		span.dispatchEvent(new CustomEvent("input"))
	}
	
	const clear_camera = () => {
		window.stream.getTracks().forEach(s => s.stop());
		video.srcObject = null;
		span.classList.add("waiting-for-permission");
	}
	prompt.onclick = () => {
		navigator.mediaDevices.getUserMedia({
			audio: false,
			video: {
				facingMode: "environment",
			},
		}).then(function(stream) {
			stream.onend = console.log
			window.stream = stream
			video.srcObject = stream
			window.cameraConnected = true
			video.controls = false
			video.play()
			video.controls = false
			span.classList.remove("waiting-for-permission");
		}).catch(function(error) {
			console.log(error)
		});
	}
	stop.onclick = () => {
		clear_camera()
	}
	popout.onclick = () => {
		span.classList.toggle("popped-out")
	}
	var intervalId = window.setInterval(function(){
	  	const cl = video.classList
		cl.remove("takepicture")
		void video.offsetHeight
		cl.add("takepicture")
		video.play()
		video.controls = false
		send_source(video, video.videoWidth, video.videoHeight)
	}, 400);
	shutter.onclick = () => {
		const cl = video.classList
		cl.remove("takepicture")
		void video.offsetHeight
		cl.add("takepicture")
		video.play()
		video.controls = false
		console.log(video)
		send_source(video, video.videoWidth, video.videoHeight)
	}
	
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState != "visible") {
			clear_camera()
		}
	})
	// Set a default image
	const img = html`<img crossOrigin="anonymous">`
	img.onload = () => {
	console.log("helloo")
		send_source(img, img.width, img.height)
	}
	img.src = "$(default_url)"
	console.log(img)
</script>
</span>
""" |> HTML
end


function process_raw_camera_data(raw_camera_data)
	# the raw image data is a long byte array, we need to transform it into something
	# more "Julian" - something with more _structure_.
	
	# The encoding of the raw byte stream is:
	# every 4 bytes is a single pixel
	# every pixel has 4 values: Red, Green, Blue, Alpha
	# (we ignore alpha for this notebook)
	
	# So to get the red values for each pixel, we take every 4th value, starting at 
	# the 1st:
	reds_flat = UInt8.(raw_camera_data["data"][1:4:end])
	greens_flat = UInt8.(raw_camera_data["data"][2:4:end])
	blues_flat = UInt8.(raw_camera_data["data"][3:4:end])
	
	# but these are still 1-dimensional arrays, nicknamed 'flat' arrays
	# We will 'reshape' this into 2D arrays:
	
	width = raw_camera_data["width"]
	height = raw_camera_data["height"]
	
	# shuffle and flip to get it in the right shape
	reds = reshape(reds_flat, (width, height))' / 255.0
	greens = reshape(greens_flat, (width, height))' / 255.0
	blues = reshape(blues_flat, (width, height))' / 255.0
	
	# we have our 2D array for each color
	# Let's create a single 2D array, where each value contains the R, G and B value of 
	# that pixel
	
	RGB.(reds, greens, blues)
end

end

# ╔═╡ 1a0324de-ee19-11ea-1d4d-db37f4136ad3
@bind raw_camera_data camera_input(;max_size=100)

# ╔═╡ 43f08085-b9b3-4e9b-b2ff-a0907b48a897
begin

### Important
### contour related utils

# rotate direction clocwise
function clockwise(dir)
    return (dir)%8 + 1
end

# rotate direction counterclocwise
function counterclockwise(dir)
    return (dir+6)%8 + 1
end

# move from current pixel to next in given direction
function move(pixel, image, dir, dir_delta)
    newp = pixel + dir_delta[dir]
    height, width = size(image)
    if (0 < newp[1] <= height) &&  (0 < newp[2] <= width)
        if image[newp]!=0
            return newp
        end
    end
    return CartesianIndex(0, 0)
end

# finds direction between two given pixels
function from_to(from, to, dir_delta)
    delta = to-from
    return findall(x->x == delta, dir_delta)[1]
end



function detect_move(image, p0, p2, nbd, border, done, dir_delta)
    dir = from_to(p0, p2, dir_delta)
    moved = clockwise(dir)
    p1 = CartesianIndex(0, 0)
    while moved != dir ## 3.1
        newp = move(p0, image, moved, dir_delta)
        if newp[1]!=0
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
    contour_list =  Vector{typeof(CartesianIndex[])}()
    done = [false, false, false, false, false, false, false, false]

    # Clockwise Moore neighborhood.
    dir_delta = [CartesianIndex(-1, 0) , CartesianIndex(-1, 1), CartesianIndex(0, 1), CartesianIndex(1, 1), CartesianIndex(1, 0), CartesianIndex(1, -1), CartesianIndex(0, -1), CartesianIndex(-1,-1)]

    height, width = size(image)

    for i=1:height
        lnbd = 1
        for j=1:width
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

                p0 = CartesianIndex(i,j)
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

end

# ╔═╡ dfb7c6be-ee0d-11ea-194e-9758857f7b20
begin

### Important
### Object tracker is here

"""
function objecttracker(img)

Return image which tracks green colored objects from the input image

## Details
Steps

- Converts image to HSV space
- Set HSV value range to create binary mask which can identify green objects
- Find contours from that binary mask
- Pick the largest contour area and find its bounding box
- Draw the bounding box on the input image
- return the resultant image

""";
function objecttracker(img)
	hsv_img = HSV.(img)
	channels = channelview(float.(hsv_img))
	hue_img = channels[1,:,:]
	val_img = channels[3,:,:]
	satur_img = channels[2,:,:]
	mask = zeros(size(hue_img))
	h, s, v = 150,  150, 255
	h1, s1, v1 = 120,  80, 90
	for ind in eachindex(hue_img)
	    if hue_img[ind] <= h && satur_img[ind] <= s/255 && val_img[ind] <= v/255
			if  hue_img[ind] >= h1 && satur_img[ind] >= s1/255 && val_img[ind] >= v1/255
	        mask[ind] = 1
			end
	    end
	end
	cnts1 = find_contours(mask)
	if length(cnts1) != 0 
		nums = findmax(map(x->length(x),cnts1))[2]
		maxcontourarea = cnts1[nums]
		pts = map(x->[float(x[1]),float(x[2])],maxcontourarea)
		center, radius = boundingsphere(pts)
		center = [ round(Int,  center[1]),  round(Int,  center[2])]
		radius =  round(Int,  radius)
		# draw_contours(img, RGB(1,0,0), cnts1)
		final_image = draw(RGB{N0f8}.(img), Polygon(RectanglePoints(Point(center[2]-radius-10, center[1]-radius-10), Point(center[2]+radius+10, center[1]+radius+10))), RGB(0,1,0))
		# final_image = image
	else
		final_image = img
	end
	return final_image	
end;

end

# ╔═╡ 594acafd-01d4-4eee-b9e6-5b886953b5b1
begin
image = process_raw_camera_data(raw_camera_data);
objecttracker(image)
end

# ╔═╡ Cell order:
# ╠═14519106-d4cf-4a77-acca-a22b7c426334
# ╟─f5642319-05ee-4731-ad26-80bcd4f6aa7b
# ╟─dfb7c6be-ee0d-11ea-194e-9758857f7b20
# ╟─1a0324de-ee19-11ea-1d4d-db37f4136ad3
# ╠═594acafd-01d4-4eee-b9e6-5b886953b5b1
# ╟─0814234d-459a-404b-9253-7f7665ea6a38
# ╟─43f08085-b9b3-4e9b-b2ff-a0907b48a897
# ╟─4934e4de-b03d-419f-a076-9a8116f5ddf5
