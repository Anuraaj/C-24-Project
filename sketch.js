
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, line1, line2, line3;

function preload()
{
  
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(200,50,40);
	ground = new Ground(800,500,1600,20);
	line1 = new Box(700,480,120,15);
	line2 = new Box(760,440,15,90);
  line3 = new Box(640,440,15,90);
  
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  
  ground.debug = true;

  paper1.display();
  ground.display();
  line1.display();
  line2.display();
  line3.display();
 
  drawSprites();
}

function keyPressed() 
{
 if (keyCode === RIGHT_ARROW )
  {       
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:300,y:-185}); 
  }
  if (keyCode === LEFT_ARROW )
  {       
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-300,y:-185}); 
  }
}


