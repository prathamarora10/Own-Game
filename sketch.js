const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,boy,ground,bg,billiardball,chocolate,paperwaste,partyhat,rock,soda,water,watering,seesaw,bench,tree;
var waste = []
var Obstacles = []
function preload()
{
	boyImg = loadImage("boyImg.png")
	bg = loadImage("bg.png")
	billiardball = loadImage("billiardball.png")
	chocolate = loadImage("chocolate.png")
	paperwaste = loadImage("paperwaste.png")
	partyhat = loadImage("partyhat.png")
	rock = loadImage("rock.png")
	soda = loadImage("soda.png")
	water = loadImage("water.png")
	watering = loadImage("watering.png")
	bench = loadImage("chair.jpg")
	tree = loadImage("d.png")
	seesaw = loadImage("seesaw.jpg")

}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(100,900,50,120)
	ground = new Ground(windowWidth/2,windowHeight-50,windowWidth,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  if(frameCount%200 === 0){
	waste.push(new Waste(windowWidth+10,round(random(600,windowHeight-100)),50,50))
  }

  for(var i=0;i<waste.length;i++){
	  waste[i].display();
	  
	  
  }

  if(frameCount%400 === 0){
	  Obstacles.push(new Obstacle(round(random(100,1000)),900,150,150))
}

for(var j=0;j<Obstacles.length;j++){
	//Obstacles[j].display();
	//Matter.Body.applyForce(Obstacles[j],{x:5,y:0})
}


  boy.display()
  
  drawSprites();
 
}

