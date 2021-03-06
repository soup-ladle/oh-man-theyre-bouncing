const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myGround, myEngine, myWorld
var ball
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create()
  myWorld = myEngine.world 
  var myGroundOptions = {
    isStatic: true
  }
var ballOptions = {
  restitution: 1
}
  myGround = Bodies.rectangle(400,300,800,50,myGroundOptions)
  World.add(myWorld,myGround)
  ball = Bodies.circle(400,-50,10,ballOptions)
  World.add(myWorld,ball)
  console.log (myGround)
}

function draw() {
  background(255,255,255);  
  Engine.update(myEngine)
  rectMode(CENTER)
  rect(myGround.position.x,myGround.position.y,800,50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}