
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Ball(300,500,50,50);
bob2 = new Ball(350,500,50,50);
bob3 = new Ball(400,500,50,50);
bob4 = new Ball(450,500,50,50);
bob5 = new Ball(500,500,50,50);	

rpe1 = new Rope(bob1.body,{x:300,y:300});
rpe2 = new Rope(bob2.body,{x:350,y:300});
rpe3 = new Rope(bob3.body,{x:400,y:300});
rpe4 = new Rope(bob4.body,{x:450,y:300});
rpe5 = new Rope(bob5.body,{x:500,y:300});
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rpe1.display()
  rpe2.display()
  rpe3.display()
  rpe4.display()
  rpe5.display()
  drawSprites();
 
}



function mouseDragged(){	
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
	}