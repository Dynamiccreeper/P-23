var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3;
var b1S,b2S,b3S;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	//Matter.Body.setStatic(Body,isStatic);

	b1S=createSprite(400,500,100,20);
	b1S.shapeColor="red";

	b2S=createSprite(350,450,20,100)
	b2S.shapeColor="red";

	b3S=createSprite(450,450,20,100)
	b3S.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageSprite_option = {

		isStatic:true, restitution : 0.1
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageSprite_option);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 b1=Bodies.rectangle(400,500,100,20,{isStatic:true});
	 World.add(world,b1);

	 b2=Bodies.rectangle(350,450,20,100,{isStatic:true});
	 World.add(world,b2);

	 b3=Bodies.rectangle(450,450,20,100,{isStatic:true});
	 World.add(world,b3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 40 ) {
		Matter.Body.setStatic(packageBody,false);
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	 }
}



