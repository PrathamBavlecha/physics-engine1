const engine = Matter.Engine
const world = Matter.World
const bodies = Matter.Bodies
var myEngine, myWorld;
var ground,ball;

function setup(){
createCanvas(600,400)

myEngine = engine.create()
myWorld = myEngine.world
var options = {
    isStatic: true
}
ground = bodies.rectangle(300,380,600,10,options);
world.add(myWorld,ground)
var options1 = {
    restitution: 0.8
}
ball = bodies.circle(300,200,20,options1)
world.add(myWorld,ball)
console.log(ball)
}

function draw(){
 background(0)

 engine.update(myEngine)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,600,10)
 ellipseMode(RADIUS)
 circle(ball.position.x,ball.position.y,20)
}