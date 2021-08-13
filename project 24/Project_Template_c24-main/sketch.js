const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var bg,backgroundImg;
var player ,computer;
var base1 ,base2;
var pArcher,cArcher;

function preload() {
  backgroundImg = loadImage("./assets/back.gif");
  }

function setup() {
  canvas = createCanvas(1550,700);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
base1 = new ComputerBase(100,random(450,height-300),180,150)
base2 = new PlayerBase(1400,random(450,height-300),180,150)
computer = new Player(97,base1.body.position.y-153,50,180)
player = new Computer(1400,base2.body.position.y-153,50,180)
cArcher = new ComputerArcher(97,base1.body.position.y - 180,120,120)
pArcher = new PlayerArcher(1400,base2.body.position.y - 180,120,120);



 }

function draw() {

  background(180);
  image(backgroundImg,0,0,width,height);
  Engine.update(engine);

  // Title
  fill("green");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY",800,50);

   //Display Playerbase and computer base 
base1.display();
base2.display();

   //display Player and computerplayer
player.display();
computer.display();
pArcher.display();
cArcher.display();
}


























































































































































































