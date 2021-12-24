function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
var buttonP;
glider=[
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1]]
glider = transpose(glider);

blinker = [[1, 1, 1]]

block = [
  [0, 1, 0],
  [1, 0, 1],
]

block = [
  [1, 1],
  [1, 1],
]
block = transpose(block);

beehive = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
]
beehive = transpose(beehive);

loaf = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
]
loaf = transpose(loaf);

boat = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
]
boat = transpose(boat);

tub = [
  [0,1,0],
  [1,0,1],
  [0,1,0]
]
tub = transpose(tub);

toad=[
  [0,1,1,1],
  [1,1,1,0]
]
toad = transpose(toad)

beacon=[
  [1,1,0,0],
  [1,0,0,0],
  [0,0,0,1],
  [0,0,1,1],
]
beacon = transpose(beacon)

pulsar=[
  [0,0,1,1,1,0,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,1,0,1,0,0,0,0,1],
  [1,0,0,0,0,1,0,1,0,0,0,0,1],
  [1,0,0,0,0,1,0,1,0,0,0,0,1],
  [0,0,1,1,1,0,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,1,0,0,0,1,1,1,0,0],
  [1,0,0,0,0,1,0,1,0,0,0,0,1],
  [1,0,0,0,0,1,0,1,0,0,0,0,1],
  [1,0,0,0,0,1,0,1,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,1,0,0,0,1,1,1,0,0],
]
pulsar = transpose(pulsar)

pentadecathlon=[
  [0,0,1,0,0,0,0,1,0,0],
  [1,1,0,1,1,1,1,0,1,1],
  [0,0,1,0,0,0,0,1,0,0],
]
pentadecathlon = transpose(pentadecathlon)

lightweight=[
  [0,1,0,0,1],
  [1,0,0,0,0],
  [1,0,0,0,1],
  [1,1,1,1,0]
]
// lightweight = transpose(lightweight)reset

heavyweight=[
  [0,0,0,1,1,0,0],
  [0,1,0,0,0,0,1],
  [1,0,0,0,0,0,0],
  [1,0,0,0,0,0,1],
  [1,1,1,1,1,1,0],
] 
heavyweight = transpose(heavyweight)

rpentomino=[
  [0,1,1],
  [1,1,0],
  [0,1,0],
]
rpentomino = transpose(rpentomino)

diehard=[
  [0,0,0,0,0,0,1,0],
  [1,1,0,0,0,0,0,0],
  [0,1,0,0,0,1,1,1],
]
diehard = transpose(diehard)

acorn=[
  [0,1,0,0,0,0,0],
  [0,0,0,1,0,0,0],
  [1,1,0,0,1,1,1],
]
acorn = transpose(acorn)

quadpole=[
  [1,1,0,0,0,0,0],
  [1,0,0,0,0,0,0],
  [0,1,0,1,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,1,0,1,0],
  [0,0,0,0,0,0,1],
  [0,0,0,0,0,1,1],
]
quadpole = transpose(quadpole)

circleoffire=['fixed'
  [0,0,0,0,1,0,1,0,0,0,0],
  [0,0,1,0,0,1,0,0,1,0,0],
  [0,0,0,1,0,1,0,1,0,0,0],
  [0,1,1,1,0,1,0,1,1,1,0],
  [0,0,0,0,0,1,0,0,0,0,0],
  [1,1,1,1,1,0,1,1,1,1,1],
  [0,0,0,0,0,1,0,0,0,0,0],
  [0,1,1,1,0,1,0,1,1,1,0],
  [0,0,0,1,0,1,0,1,0,0,0],
  [0,0,1,0,0,1,0,0,1,0,0],
  [0,0,0,0,1,0,1,0,0,0,0],
]
circleoffire = transpose(circleoffire)

glidergun=[
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
]
glidergun = transpose(glidergun)

// DOuble gun
bigun= [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
bigun= transpose(bigun)

// Backrake 1
backrake1= [[0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
// backrake1= transpose(backrake1)

puffer= [[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
puffer = transpose(puffer)
test = "OO \
O.O \
..O.O \
....O.O \
.....OO \
"
let design = 0;

let grid;
let next;
let cols;
let rows;
let resolution = 20;
let a;
let b;
let value = 0;
let run = 0;
let gennum = 1000;
let gencount =0;
let generations;
let designtype = "glider";
// var w;
// var grid;
// var newGrid;
var keyP;
var randP;
var buttonP;
var startButton;
var check;

let fr = 2;
// function changeGray() {
//   console.log("Called")
//   grid[i][j] = color(100,100,100)
// }
function setup() {
  let cnv = createCanvas(1400, 600);
  cnv.position(70, 100,'fixed');
  // cnv.mouseOver(changeGray);
  resetSketch();
  // cleanslate1()
  frameRate(fr);
  keyP = false;
  randP = false;
  buttonP = false;
  check = false;

  // createInput("X:"+floor(mouseX / resolution),500, -10)
  i = 1.6
  var button = createButton("reset");
  button.mousePressed(resetSketch)
  button.style('font-size', '30px');
  button.position(width / i-80, 30);
  button.size(100, 60);

  var start = createButton("start");
  start.mousePressed(start1);
  start.style('font-size', '30px');
  start.position(width / i + 30, 30);
  start.size(100, 60);

  var cleanslate = createButton("clean");
  cleanslate.mousePressed(cleanslate1)
  cleanslate.style('font-size', '30px');
  cleanslate.position(width / i + 140, 30);
  cleanslate.size(100, 60);

  var stop = createButton("stop");
  stop.mousePressed(stop1);
  stop.style('font-size', '30px');
  stop.position(width / i  + 250, 30);
  stop.size(100, 60);

  createP();

  // Designs of objects
  label1= createSpan("Designs:");
  label1.style('font-size', '30px');
  label1.position(width / i + 360, 40);
  label1.size(120, 60);

  sel = createSelect();
  sel.style('font-size', '30px');
  sel.position(width / i + 470, 30);
  sel.size(120, 60);
  // sel.position(10, 10);
  sel.option('block');
  sel.option('beehive');
  sel.option('loaf');
  sel.option('boat');
  sel.option('tub');

  // Oscillators
  sel.option('blinker');
  sel.option('toad');
  sel.option('beacon');
  sel.option('pulsar');
  sel.option('pentadecathlon')

  // Spaceships
  sel.option('glider');
  sel.option('lightweight');
  sel.option('middleweight');
  sel.option('heavyweight')

  // New
  sel.option('rpentomino');
  sel.option('diehard');
  sel.option('acorn');
  sel.option('quadpole');
  sel.option('circleoffire');
  sel.option('glidergun');
  sel.option('bigun');
  sel.option('backrake1')
  sel.option('puffer')
  // sel.option('grape');
  sel.selected('glider');
  sel.changed(mySelectEvent);

  // Generation related controls
  createP(); //spacer with <p> tag
  genlabel = createSpan("Generations:");
  genlabel.style('font-size', '30px');
  genlabel.position(width /6-160, 40);
  genlabel.size(120, 60);

  generations = createInput(gennum)
  generations.changed(gennumberset);
  generations.style('font-size', '30px');
  generations.position(width /6, 30);
  generations.size(120, 60);

  frr = createSpan("Frame Rate:");
  frr.style('font-size', '30px');
  frr.position(width /6+150, 30);
  frr.size(120, 60);

  frrate = createInput(fr)
  frrate.changed(frset);
  frrate.style('font-size', '30px');
  frrate.position(width /6+260, 30);
  frrate.size(120, 60);

  startButton = createButton("Start");
  startButton.style('font-size', '30px');
  startButton.position(width / 2 - 30, height - height / 4+120);
  startButton.size(100, 60);
  startButton.mousePressed(play);

}

function mySelectEvent() {
  // let item = ;
  // background(0);
  // fill(255, 102, 153);
  // text('It is a ' + item + '!',10,10);
  designtype = sel.value();
  console.log(designtype)
}

function gennumberset() {
  gennum = generations.value();
  console.log(gennum);
}

function frset() {
  fr = frrate.value();
  console.log(gennum);
}
function gliderdesign() {
  design = 1;
}

function blinkerdesign() {
  design = 2;
}
function cleanslate1() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0;
    }
  }
  grid = gridsetup(grid);
}
function start1() {
  if (run == 0) {
    run = 1;
  } else if (run == 1) {
    run = 0;
  }
  else {
    run = 0;
  }
}
function stop1() {
  run =0;

}
function resetSketch() {
  cols = width/ resolution;
  rows = height/ resolution;
  gencount =0;
  run =0;
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function gridsetup(grid) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(255);
        // let c = color(255, 204, 0);
        // c= color(179,205,224)
        // b1= color(1,31,75)
        // b2= color(3,57,108)
        // b3= color(0,91,150)
        // b4= color(100,151,177)
        // b5= color(179,205,224)
        // colors = [b1,b2,b3,b4,b5]
        // const randomElement = colors[Math.floor(Math.random() * colors.length)];
        // fill(randomElement);
        // fill(c)
        stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }
  return grid;
}

function nextsetup(next) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Count live neighbors!
      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }
  return next;
}

function draw() {
  background(0);
  frameRate(fr);
  if (!buttonP) {
    pageInit();
  }
  else {
  console.log("Inside Proper loop")
  // resetSketch()
  
  grid = gridsetup(grid);
  
  fill(255);
  textSize(20);
  text("Framerate: " + fr, 10, 90);
  text("X: " + floor(mouseX / resolution), 10, 20);
  text("Y: " + floor(mouseY / resolution), 10, 50);
  let running ="";
  if (run == 1){
    running = "running!"
  }
  else{
    running ="stopped!"
  }
  text("Status:"+running , 10, 120);
  text("GenNum:"+gennum , 10, 150);
  text("GenCnt:"+gencount , 10, 180);
  next = make2DArray(cols, rows);
  if (run == 1) {
    gencount++;
    // Compute next based on grid
    next = nextsetup(next);

    // line(mouseX, 0, mouseX, 100);
    grid = next;
  }
  else {
    grid = grid;

  }
  }
  if (gencount == gennum){
    // resetSketch()
    run =0
  }
}

function mousePressed(event) {
  col = floor(mouseX / resolution);
  row = floor(mouseY / resolution);
  if (grid[col][row] == 1) {
    grid[col][row] = 0;
  } else if (grid[col][row] == 0) {
    grid[col][row] = 1;
  }
  // console.log(event.clientX,event.clientY);
  // console.log(col, row);
  // console.log(grid[10][10])
}

function doubleClicked() {
  // change the value if
  // the event occurs
  col = floor(mouseX / resolution);
  row = floor(mouseY / resolution);
  console.log("Design:", designtype)
  if (designtype == "glider") {
    const dimensions = [
      glider.length,
      glider.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        grid[i][j] = glider[(i - col) + 1][(j - row) + 1];
      }
    }
    // design =0;
  } else if (designtype == "blinker") {
    grid[col][row - 1] = 1;
    grid[col][row] = 1;
    grid[col][row + 1] = 1;
  } else if (designtype == "block") {
    const dimensions = [
      block.length,
      block.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        grid[i][j] = block[(i - col) + 1][(j - row) + 1];
      }
    }
  } else if (designtype == "beehive") {
    const dimensions = [beehive.length, beehive[0].length];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = -(i - col) + 1
        y = -(j - row) + 1
        console.log("(x,y):(", x, y, ")", beehive[x][y]);
        console.log("(x,y):(" + i, j + ")", grid[i][j]);
        grid[i][j] = beehive[x][y];
      }
    }
  } else if (designtype == "loaf") {
    const dimensions = [loaf.length, loaf[0].length];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = -(i - col) + 1
        y = -(j - row) + 1
        console.log("(x,y):(", x, y, ")", loaf[x][y]);
        console.log("(x,y):(" + i, j + ")", grid[i][j]);
        grid[i][j] = loaf[x][y];
      }
    }
  } else if (designtype == "boat") {
    const dimensions = [
      boat.length,
      boat.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        grid[i][j] = boat[(i - col) + 1][(j - row) + 1];
      }
    }
  } else if (designtype == "tub") {
    const dimensions = [
      tub.length,
      tub.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        grid[i][j] = tub[(i - col) + 1][(j - row) + 1];
      }
    }
  } else if (designtype == "toad") {
    const dimensions = [
      toad.length,
      toad.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        grid[i][j] = toad[-(i - col) + 1][-(j - row) + 1];
      }
    }
  } else if (designtype == "beacon") {
    const dimensions = [
      beacon.length,
      beacon.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        grid[i][j] = beacon[-(i - col) + 1][-(j - row) + 1];
      }
    }
  } else if (designtype == "sample") {
    const dimensions = [
      sample.length,
      sample.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        grid[i][j] = sample[(i - col) + 1][(j - row) + 1];
      }
    }
  }
  else if (designtype == "pulsar") {
    const dimensions = [
      pulsar.length,
      pulsar.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = -(i - col) + floor(dimensions[0] / 2)
        y = -(j - row) + floor(dimensions[1] / 2) 
        grid[i][j] = pulsar[x][y];
      }
    }
  }
  else if (designtype == "pentadecathlon") {
    const dimensions = [
      pentadecathlon.length,
      pentadecathlon.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    // const dimensions = [loaf.length, loaf[0].length];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        grid[i][j] = pentadecathlon[x][y];
      }
    }
  }
  else if (designtype == "lightweight") {
    const dimensions = [
      lightweight.length,
      lightweight.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        grid[i][j] = lightweight[x][y];
      }
    }
  }
  else if (designtype == "middleweight") {
    const dimensions = [
      middleweight.length,
      middleweight.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        grid[i][j] = middleweight[x][y];
      }
    }
  }
  else if (designtype == "heavyweight") {
    const dimensions = [
      heavyweight.length,
      heavyweight.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        grid[i][j] = heavyweight[x][y];
      }
    }
  }
  else if (designtype == "rpentomino") {
    const dimensions = [
      rpentomino.length,
      rpentomino.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        grid[i][j] = rpentomino[x][y];
      }
    }
  }
  else if (designtype == "diehard") {
    const dimensions = [
      diehard.length,
      diehard.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    count =0;
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        console.log("(x,y):("+x,y+")",",","(i,j):("+i,j+")");
        grid[i][j] = diehard[x][y];
        console.log("Count:",count)
        count += 1;
      }
    }
  }
  else if (designtype == "acorn") {
    const dimensions = [
      acorn.length,
      acorn.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    // count =0;
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x =-(i - col) + floor(dimensions[0] / 2)
        y =-(j - row) + floor(dimensions[1] / 2) 
        // console.log("(x,y):("+x,y+")",",","(i,j):("+i,j+")");
        grid[i][j] = acorn[x][y];
        // console.log("Count:",count)
        // count += 1;
      }
    }
  }
  else if (designtype == "quadpole") {
    const dimensions = [
      quadpole.length,
      quadpole.reduce((x, y) => Math.max(x, y.length), 0)
    ];
    count = 0;
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x =-(i - col) + floor(dimensions[0] / 2)
        y =-(j - row) + floor(dimensions[1] / 2) 
        // console.log("(x,y):("+x,y+")",",","(i,j):("+i,j+")");
        grid[i][j] = quadpole[x][y];
        // console.log("Count:",count)
        // count += 1;
      }
    }
  }
  else if (designtype == "circleoffire") {
    const dimensions = [
      circleoffire.length,
      circleoffire[0].length
    ];
    // count =0;
    console.log(dimensions)
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x =-(i - col) + floor(dimensions[0] / 2)
        y =-(j - row) + floor(dimensions[1] / 2) 
        // console.log("(x,y):("+x,y+")",",","(i,j):("+i,j+")");
        grid[i][j] = circleoffire[x][y];
        // console.log("Count:",count)
        // count += 1;
      }
    }
  }  else if (designtype == "glidergun") {
    const dimensions = [
      glidergun.length,
      glidergun[0].length
    ];
    count =0;
    console.log(dimensions)
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        console.log("(x,y):("+x,y+")",",","(i,j):("+i,j+")");
        grid[i][j] = glidergun[x][y];
        console.log("Count:",count)
        count += 1;
      }
    }
    
  }  else if (designtype == "puffer") {
    const dimensions = [
      puffer.length,
      puffer[0].length
    ];
    count =0;
    console.log(dimensions)
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        console.log("(x,y):("+x,y+")",",","(i,j):("+i,j+")");
        grid[i][j] = puffer[x][y];
        console.log("Count:",count)
        count += 1;
      }
    }
    
  }
  else if (designtype == "bigun") {
    const dimensions = [
      bigun.length,
      bigun[0].length
    ];
    count =0;
    console.log(dimensions)
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        console.log("(x,y):("+x,y+")",",","(i,j):("+i,j+")");
        grid[i][j] = bigun[x][y];
        console.log("Count:",count)
        count += 1;
      }
    }
    
  }
  else if (designtype == "backrake1") {
    const dimensions = [
      backrake1.length,
      backrake1[0].length
    ];
    count =0;
    console.log(dimensions)
    for (let i = col - floor(dimensions[0] / 2); i <= col + floor(dimensions[0] / 2); i++) {
      for (let j = row - floor(dimensions[1] / 2); j <= row + floor(dimensions[1] / 2); j++) {
        x = (i - col) + floor(dimensions[0] / 2)
        y = (j - row) + floor(dimensions[1] / 2) 
        console.log("(x,y):("+x,y+")",",","(i,j):("+i,j+")");
        grid[i][j] = backrake1[x][y];
        console.log("Count:",count)
        count += 1;
      }
    }
    
  }
  else {
    console.log("Hello");
    design = 0;
  }

  // if (design == 2){
  //   grid[col][row-1]=1;
  //   grid[col][row]=1;
  //   grid[col][row+1]=1;
  // }
  grid = gridsetup(grid);
}
function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function transpose(a) {

  // Calculate the width and height of the Array
  var w = a.length || 0;
  var h = a[0] instanceof Array ? a[0].length : 0;

  // In case it is a zero matrix, no transpose routine needed.
  if (h === 0 || w === 0) { return []; }

  /**
   * @var {Number} i Counter
   * @var {Number} j Counter
   * @var {Array} t Transposed data is stored in this array.
   */
  var i, j, t = [];

  // Loop through every item in the outer array (height)
  for (i = 0; i < h; i++) {

    // Insert a new row (array)
    t[i] = [];

    // Loop through every item per item in outer array (width)
    for (j = 0; j < w; j++) {

      // Save transposed data.
      t[i][j] = a[j][i];
    }
  }

  return t;
}


function pageInit() {

  textAlign(CENTER);

  background(255);
  textSize(width / 20);
  fill(0);
  text("The Game of Life", width / 2, 100);

  textAlign(LEFT);

  stroke(0, 0, 0, 20);
  strokeWeight(4);
  fill(0);
  rect(width / 13, 200, 35, 35);

  // noStroke();
  textSize(width / 30);
  fill(0);
  text("Black cells are alive", width / 13 + 45, 230);

  stroke(0, 0, 0, 20);
  strokeWeight(4);
  fill(255);
  rect(width / 2 + width / 13, 200, 35, 35);

  // noStroke();
  textSize(width / 30);
  fill(0);
  text("White cells are dead", width / 2 + width / 13 + 40, 230);

  textAlign(CENTER);

  textSize(width / 31);
  text("Any dead cell with 3 live neighbours becomes alive", width / 2, 300);
  text("Any live cell with less than 2 live neighbours dies", width / 2, 350);
  text("Any live cell with more than 3 live neighbours dies", width / 2, 400);
  text("Can you come up with patterns to keep the system moving?", width / 2, 450);
  stroke(0, 0, 0, 1);
  strokeWeight(1);
}
function play() {

  startButton.hide();
  buttonP = true;
  textAlign(LEFT);
}

function keyPressed(){
  console.log("Pressed");
  if(keyCode === ENTER){
    run = !run;
  } else if(keyCode === UP_ARROW){
    fr++;
  } else if(keyCode === DOWN_ARROW){
    fr--;
  }
}
