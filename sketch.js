var particles = [];
var plinkos = [];
var divisions = [];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var border1, border2, border3, border4;

var divisionHeight = 300;


function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);

  ground = new Ground(240, 788, width, 15);

  border1 = new Border(240, 802, width, 20);
  border2 = new Border(-2, 400, 20, 790);
  border3 = new Border(240, -2, width, 20);
  border4 = new Border(482, 400, 20, 785);
  
  for(var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }


  Engine.run(engine);

}


function draw() {

  Engine.update(engine);

  background(0);

  ground.display();

  border1.display();
  border2.display();
  border3.display();
  border4.display();

}