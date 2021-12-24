using Base: _maxlength, Bool
using FileIO

# run(`cd GameOfLife`)
files = readdir()
txt_files = filter(endswith(".cells"), files)
for (i, file) in enumerate(txt_files)
    # println(typeof(file))
    filename = split(file, ".")[1]
    cp(file, "$(filename).txt", force = true)
end

content = []
open("input.txt") do f
    line = 0
    global content = []
    while !eof(f)
        s = readline(f)
        if length(s) != 0 && s[1] == '!'
            continue
        else 
            line += 1
            println("$s")
        end
        if length(s) >= maxlength
            global maxlength = length(s)
        end
        push!(content,s)
    end

end
# close(f)


finalresult = BitArray[]
for i in 1:length(content)
    global finalresult;
    local1 = []
    if length(content[i])<maxlength
        content[i]=rpad.(content[i],maxlength,"0")
    end
    for j in 1:maxlength
        if content[i][j] == 'O'
            push!(local1,1)
        else
            push!(local1,0)
        end
    end
    push!(finalresult, local1)
end
as = finalresult
println(as)
final = open("result.js", "w")
array = "$as"
# writing to a file using write() method
write(final, "var output= $(array[9:end])")
close(final)
