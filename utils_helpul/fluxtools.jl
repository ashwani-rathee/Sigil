### A Pluto.jl notebook ###
# v0.14.7

using Markdown
using InteractiveUtils

# ╔═╡ c5b16d82-6281-11ec-250b-8be67db3a2e7
using Flux

# ╔═╡ b75114fe-f046-4681-9348-139318cf8ba8
xs = rand(Float32, 28, 28, 1, 50);

# ╔═╡ f90bf01b-06be-4685-9ad9-6dca0ac87b88
m = Chain(
	Conv((5,5), 1 => 7), 
	MeanPool((5,5), pad=SamePad())
)

# ╔═╡ 73ce15dc-d40d-4df8-abe7-4e7b3019f8bc
# Chain also supports indexing and slicing, e.g. m[2] or m[1:end-1]. m[1:3](x) will calculate the output of the first three layers.

# ╔═╡ 596bc7ab-b3bc-4d02-b37c-04d34c3be108
m[1](xs) |> size

# ╔═╡ 2d0d9a40-6b92-49b2-ba07-bee22f8d3d0d
m[3](xs) |> size

# ╔═╡ fc8ec7eb-63ea-4f5c-9600-eba205eb3f70
m(xs) |> size

# ╔═╡ 0eb0d2b6-6c67-479b-a6f5-1a4fa7aa9e8e
begin
imgsize=(28,28,1)
nclasses=8
out_conv_size = (imgsize[1]÷4 - 3, imgsize[2]÷4 - 3, 16)
end

# ╔═╡ a79c9b40-56db-4056-bbf6-4d385f254139
model = Chain(
            Flux.normalise,
	Conv((3, 3), imgsize[end]=>32, relu),
            Conv((3, 3), 32=>64, relu),
            MaxPool((2, 2)),
            Dropout(0.25),
            flatten,
            Dense(9216, 120, relu), 
            Dropout(0.5),
            Dense(120, nclasses)
          )

# ╔═╡ 25c1d1ae-3950-47d7-8060-38b3b13c68c0
Flux.outdims(Conv((3, 3), 1 => 10), (28, 28, 1, 10))

# ╔═╡ 62b4d2c2-a30f-49f6-ab0a-3e61e2a3ac45
prod(out_conv_size)

# ╔═╡ a74b1a5a-af15-4c99-ba47-e4f4dc9f8396
Flux.outdims(Chain(
		Conv((3, 3), imgsize[end]=>32, relu), 
		Conv((3, 3), 32=>64, relu),
		MaxPool((2,2)),Dropout(0.25), flatten),
		
	(28, 28, 1, 10))

# ╔═╡ 46faca74-b9c6-470f-b916-329f566e17a9
imgsize[end]

# ╔═╡ b1b604ef-a722-441c-b58a-709602dd3e71
model[1:end](xs) |> size

# ╔═╡ 86ec66b0-bb94-4df7-ba27-91c6d89fac05
m[3](xs) |> size

# ╔═╡ Cell order:
# ╠═c5b16d82-6281-11ec-250b-8be67db3a2e7
# ╠═b75114fe-f046-4681-9348-139318cf8ba8
# ╠═f90bf01b-06be-4685-9ad9-6dca0ac87b88
# ╠═73ce15dc-d40d-4df8-abe7-4e7b3019f8bc
# ╠═596bc7ab-b3bc-4d02-b37c-04d34c3be108
# ╠═2d0d9a40-6b92-49b2-ba07-bee22f8d3d0d
# ╠═fc8ec7eb-63ea-4f5c-9600-eba205eb3f70
# ╠═0eb0d2b6-6c67-479b-a6f5-1a4fa7aa9e8e
# ╠═a79c9b40-56db-4056-bbf6-4d385f254139
# ╠═25c1d1ae-3950-47d7-8060-38b3b13c68c0
# ╠═62b4d2c2-a30f-49f6-ab0a-3e61e2a3ac45
# ╠═a74b1a5a-af15-4c99-ba47-e4f4dc9f8396
# ╠═46faca74-b9c6-470f-b916-329f566e17a9
# ╠═b1b604ef-a722-441c-b58a-709602dd3e71
# ╠═86ec66b0-bb94-4df7-ba27-91c6d89fac05
