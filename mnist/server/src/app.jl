using Genie
using Genie.Router
using HTTP
import Genie.Renderer.Json: json
using Genie.Renderer.Json, Genie.Requests
using Genie.Renderer.Html
using Genie.Renderer
using Flux
using Flux.Data: DataLoader
using Flux.Optimise: Optimiser, WeightDecay
using Flux: onehotbatch, onecold
using Flux.Losses: logitcrossentropy
using BSON
using BSON: @load
function LeNet5(; imgsize=(28,28,1), nclasses=10) 
    out_conv_size = (imgsize[1]÷4 - 3, imgsize[2]÷4 - 3, 16)
    
    return Chain(
            Conv((5, 5), imgsize[end]=>6, relu),
            MaxPool((2, 2)),
            Conv((5, 5), 6=>16, relu),
            MaxPool((2, 2)),
            flatten,
            Dense(prod(out_conv_size), 120, relu), 
            Dense(120, 84, relu), 
            Dense(84, nclasses)
          )
end

model = LeNet5() |> cpu

BSON.@load "./src/model.bson" model

function launchServer(port)

    Genie.config.run_as_server = true
    Genie.config.server_host = "0.0.0.0"
    Genie.config.server_port = port


    println("port set to $(port)")

    route("/") do
        "Hi there! This is server 1"
    end

    route("/digitreg", method = POST) do
        data = eval(Meta.parse(rawpayload()))
        # println(size(data))
        if size(data) == (784,)
            data = reshape(data, (28,28,1))
            xtrain = zeros((28,28,1,1))
            xtrain[:,:,:,1] = data
            results = model(xtrain)
            println(findmax(results)[2][1]-1)
            return findmax(results)[2][1]-1
        else
            println("invalid data")
            return -1
        end
    end

    Genie.AppServer.startup(async = false)
end

launchServer(parse(Int, ARGS[1]))
# launchServer( 8001)


