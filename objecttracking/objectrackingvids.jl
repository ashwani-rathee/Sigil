using VideoIO
using Images
using ImageDraw

io = VideoIO.openvideo("video.mp4") # for testing purposes


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
centers = []
function framestackbuilder(i)
	img = convert(Array{Float64}, Gray.(i)) .> 0.5
	first, last = firstlast(img)
	center, radius = centerradius(first, last)
	append!(centers, center)
	draw!(RGB.(img), Polygon(RectanglePoints(Point(center[2]-radius-5, center[1]-radius-5), Point(center[2]+radius+5, center[1]+radius+5))), RGB(0,1,0))
	if length(centers) < 7
		a =  1
	else
		a =  length(centers)-6
	end
	for i in centers[a:end]
		draw!(img, LineSegment(Point(10, 10), Point(100, 100)), RGB{N0f8}(1))
	end
	return img
end
# framestack = map(x->framestackbuilder(x), io)
encoder_options = (crf=23, preset="medium")
framerate=24
img1  = load("./lotofdata/screenshot_1.jpeg") 
open_video_out("video1.mp4", img1, framerate=framerate, encoder_options=encoder_options) do writer
    for frame in io
		img = convert(Array{Float64}, Gray.(frame)) .> 0.5
		first, last = firstlast(img)
		center, radius = centerradius(first, last)
		append!(centers, center)
		img = draw(RGB.(img), Polygon(RectanglePoints(Point(center[2]-radius-5, center[1]-radius-5), Point(center[2]+radius+5, center[1]+radius+5))), RGB(0,1,0))
		if length(centers) < 7
			a =  1
		else
			a =  length(centers)-6
		end
		for i in centers[a:end]
			img = draw(img, LineSegment(Point(i[1], i[1]), Point(i[2]-100, i[2]-100)), RGB{N0f8}(1))
		end
        write(writer, RGB.(img))
    end
end