
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,leftside,rightside;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,670,width,20);
	leftside = new Ground(1100,600,20,120);
	rightside = new Ground(1350,600,20,120);
	var ball_options = {
		isSatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  leftside.display();
  rightside.display();
  ellipse(ball.position.x,ball.position.y,40,40);
  
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
}
}



