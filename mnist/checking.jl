### A Pluto.jl notebook ###
# v0.14.7

using Markdown
using InteractiveUtils

# ╔═╡ 786a41c2-63ea-11ec-3ec3-473864f1051d
using Pkg

# ╔═╡ 6f9c2a09-371e-4c5a-a9d3-acb53ea222ac
Pkg.activate(".")

# ╔═╡ 2106f13d-f759-444a-8c2e-3bfd2bcb3478
Pkg.add("CSV")

# ╔═╡ f58a6aa0-30f7-4362-bf67-64fbd3376ed7
using HTTP, CSV, DataFrames

# ╔═╡ 152d990a-7de0-4ecc-b223-0934d579281d
using Images

# ╔═╡ 520aacd9-5a6d-40bb-996d-026bf9499962
csv_reader = CSV.File("./runs/dataset/test.csv")

# ╔═╡ 66fee52c-5f97-4840-8609-d0ec4d7f7fdc
dataall = csv_reader |> Tables.matrix

# ╔═╡ baf17f10-8033-49a7-a80a-8f0e5f36e6de
dataall[1,:]

# ╔═╡ d56cbd95-5ef7-4457-ad81-333174f63fe9
images = map(i-> Gray.(reshape(dataall[i,:], (28,28))./255), 1:100)

# ╔═╡ fc98a3f0-6275-4078-b568-d74868df8bb2
r = HTTP.post("http://localhost:8001/digitreg", [], string(dataall[5,:]))

# ╔═╡ 895b23e7-2319-4920-8a9f-ec31735682d2
 a = String(r.body)

# ╔═╡ 5bd3dffc-f152-411d-9567-107a64327868
parse(Int64, a)

# ╔═╡ Cell order:
# ╠═786a41c2-63ea-11ec-3ec3-473864f1051d
# ╠═6f9c2a09-371e-4c5a-a9d3-acb53ea222ac
# ╠═2106f13d-f759-444a-8c2e-3bfd2bcb3478
# ╠═f58a6aa0-30f7-4362-bf67-64fbd3376ed7
# ╠═520aacd9-5a6d-40bb-996d-026bf9499962
# ╠═66fee52c-5f97-4840-8609-d0ec4d7f7fdc
# ╠═baf17f10-8033-49a7-a80a-8f0e5f36e6de
# ╠═152d990a-7de0-4ecc-b223-0934d579281d
# ╠═d56cbd95-5ef7-4457-ad81-333174f63fe9
# ╠═fc98a3f0-6275-4078-b568-d74868df8bb2
# ╠═895b23e7-2319-4920-8a9f-ec31735682d2
# ╠═5bd3dffc-f152-411d-9567-107a64327868
