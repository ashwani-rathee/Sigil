using VideoIO

# imgstack = []
# for i in 1: 144
# 	img = load("./lotofdata/screenshot_$(i).jpeg")
#     img = convert(Array{Float64}, Gray.(img)) .> 0.5
#     first, last = firstlast(img)
#     center, radius = centerradius(first, last)
# 	img = draw!(RGB.(img), Polygon(RectanglePoints(Point(center[2]-radius-5, center[1]-radius-5), Point(center[2]+radius+5, center[1]+radius+5))), RGB(0,1,0))
#     save("./lotofdata/results/$(i).png", img)
# end

# framestack = map(x->rand(UInt8, 100, 100), 1:100) #vector of 2D arrays
framestack = map(x->load("./lotofdata/screenshot_$(x).jpeg"), 1:1432)
encoder_options = (crf=23, preset="medium")
framerate=24
open_video_out("video.mp4", framestack[1], framerate=framerate, encoder_options=encoder_options) do writer
    for frame in framestack
        write(writer, frame)
    end
end
