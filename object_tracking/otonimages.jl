using VideoIO
using ImageFeatures
using Images
using ImageDraw
# Construct a AVInput object to access the video and audio streams in a video container
# io = VideoIO.open(video_file)
io = VideoIO.openvideo("test.mp4") # for testing purposes

function posindex(x)
	return floor(Int, x%600),ceil(Int, x/600)
end

function firstlast(imgdash)
	dia1pos = 0
	dia2pos = 0
	changed = true
	for (id,i) in enumerate(imgdash)
	
		if i == 1 && changed == true
			dia1pos = posindex(id)
			changed = false
		elseif i == 1
			dia2pos = posindex(id)
		else 
			continue
		end
	end
	return dia1pos, dia2pos
end

function centerradius(dia1, dia2)
	center = (floor(Int, (dia1[1]+dia2[1])/2 ),floor(Int, (dia1[2]+dia2[2])/2))
	radius = floor(Int,sqrt((dia1[1]-dia2[1])^2 + (dia1[2]-dia2[2])^2) /2)
	return center, radius
end

for i in 1: 144
	img = load("./lotofdata/screenshot_$(i).jpeg")
    img = convert(Array{Float64}, Gray.(img)) .> 0.5
    first, last = firstlast(img)
    center, radius = centerradius(first, last)
	img = draw!(RGB.(img), Polygon(RectanglePoints(Point(center[2]-radius-5, center[1]-radius-5), Point(center[2]+radius+5, center[1]+radius+5))), RGB(0,1,0))
	img = draw(img, Polygon(RectanglePoints(Point(10, 10), Point(100, 100))), RGB{N0f8}(1))
    save("./lotofdata/results/$(i).png", img)
	break
end


# for (id, i) in enumerate(io)
#      # img = load("./lotofdata/screenshot_$(i).jpeg")
#     img = convert(Array{Float64}, Gray.(i)) .> 0.5
#     first, last = firstlast(img)
#     center, radius = centerradius(first, last)
#     img = draw(RGB.(img), Polygon(RectanglePoints(Point(center[2]-radius-5, center[1]-radius-5), Point(center[2]+radius+5, center[1]+radius+5))), RGB(0,1,0))
#     save("./images/$(id).png", img)
# end

# close(io)