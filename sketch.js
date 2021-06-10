
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinline1
var dustbinline2;
var dustbinline3;
var dustbin;
var ground;
var paperObject;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,5);
	dustbinline3 = new Dustbin(675,685,190,5);
	dustbinline1 = new Dustbin(580,590,5,200);
	dustbinline2 = new Dustbin(770,590,5,200);
	dustbin = new Dustbin(675,590,200,200);
	paperObject = new Paper(200,190,55,55);
  rope = new Slingshot(paperObject.body,{x:200,y:100})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  dustbinline1.display();
  dustbinline2.display();
  dustbinline3.display();
  dustbin.display(); 
  paperObject.display();


}


function mouseDragged(){
  Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY})
  
  }
  
  function mouseReleased(){
      paperObject.fly()
  }