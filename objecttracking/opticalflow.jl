using ImageTracking
using Images, ImageView
using CoordinateTransformations, StaticArrays
using LinearAlgebra
algorithm = Farneback(50, estimation_window = 11,
                         σ_estimation_window = 9.0,
                         expansion_window = 6,
                         σ_expansion_window = 5.0)

for i in 1:537
    img1 = load("./dataset/opencv_frame_$(i).png")
    img2 = load("./dataset/opencv_frame_$(i+1).png")


    flow = optical_flow(Gray{Float32}.(img1), Gray{Float32}.(img2), algorithm)

    # Convert from (row,column) to (x,y) convention.
    map!(x-> SVector(last(x),first(x)), flow, flow)

    # Display optical flow as an image, with hue encoding the orientation and
    # saturation encoding the relative magnitude.
    max_norm = maximum(map(norm,flow))
    normalised_flow = map(PolarFromCartesian(),flow / max_norm)
    hsv = zeros(HSV{Float32},size(img1))
    for i in eachindex(flow)
        hsv[i] = HSV((normalised_flow[i].θ + pi) * 180 / pi, normalised_flow[i].r, 1)
    end
    # Visualize the optical flow and save it to disk.
    # imshow(RGB.(hsv))
    save("./demo/optical_flow_$(i).jpg", hsv)
end

