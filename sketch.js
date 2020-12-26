
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground
var box1, box2, box3

function preload()
{

}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(250, 350, 20)
	fill("magenta")

	groundsprite = createSprite(width/2,650,width,20)
	
	ground = Bodies.rectangle(width/2, 650, width, 20, {isStatic:true});

	//b1 = new Dustbin(1400, 600, 20, 100)
	//fill("grey")

	box1 = new Dustbin (1110, 600, 20, 100)
	box2 = new Dustbin(1200, 630, 200, 20)
	box3 = new Dustbin(1300, 600, 20, 100)

	World.add(world, ground)

	Engine.run(engine);  
}

function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("black");

  paper.display();

   box2.display();
   box1.display();
   box3.display();
   drawSprites();
   
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85})
	}
}


