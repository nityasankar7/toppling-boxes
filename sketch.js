 const Bodies=Matter.Bodies;
 const World=Matter.World;
 const Engine=Matter.Engine;
var engine,world;
var box1,box2;
var ground1;
function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(240,50,70,70);
  box2=new Box(200,270,70,70);
  ground1=new ground(200,390,400,20);


 
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  box1.display()
  ground1.display()
  box2.display()
}