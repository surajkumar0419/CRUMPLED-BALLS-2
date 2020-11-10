const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var paper;

function setup() {
  createCanvas(800, 550);
  engine=Engine.create();
  world = engine.world;

  paper = new Paper(50,500,50);
  ground = new Ground(400,530,800,10);
  box1 = new Dustbin(640,580,110,120);
  box2 = new Dustbin(695,470,20,120);
  box3 = new Dustbin(600,470,20,120);
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(255);
  Engine.update(engine);
  paper.display();
  ground.display();
  box3.display();
  box2.display();
  box1.display();
  
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:46,y:-46})
  }
}