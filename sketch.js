const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero,monster,rope,ground;
var backgroundImg
var bg = "day.png";


function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(1515, 680);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 570, 1200, 20);

  hero = new Hero(200,300,100);
  rope = new Rope(hero.body, { x: 200, y: 300 });
  monster = new Monster(1100,550,300,200);

  //line 1
  box1 = new Box(800, 100, 50, 50);
  box2 = new Box(800, 100, 50, 50);
  box3 = new Box(800, 100, 50, 50);
  box4 = new Box(800, 100, 50, 50);
  box5 = new Box(8000, 100, 50, 50);


  //line 2
  box6 = new Box(750, 100, 50, 50);
  box7 = new Box(750, 100, 50, 50);
  box8 = new Box(750, 100, 50, 50);
  box9 = new Box(750, 100, 50, 50);
  box10 = new Box(750,100,50,50);
  box11 = new Box(750, 100, 50, 50);


  //line 3
  box12 = new Box(700, 100, 50, 50);
  box13 = new Box(700, 100, 50, 50);
  box14 = new Box(700, 100, 50, 50);
  box15 = new Box(700, 100, 50, 50);
  box16 = new Box(700,100,50,50);
  box17 = new Box(700, 100, 50, 50);

  
  //line 4
  box18 = new Box(650, 100, 50, 50);
  box19 = new Box(650, 100, 50, 50);
  box20 = new Box(650, 100, 50, 50);
  box21 = new Box(650, 100, 50, 50);


  //line 5
  box22 = new Box(600,100,50,50);
  box23 = new Box(600,100,50,50);
  box24 = new Box(600, 100, 50, 50);


  //line 6
  box25 = new Box(850,100,50,50);
  box26 = new Box(850,100,50,50);
  box27 = new Box(850, 100, 50, 50);

  //line 7
  box28 = new Box(550,100,50,50);
  box29 = new Box(550,100,50,50);
 

  //line 8
  box30 = new Box(900,100,50,50);
  box31 = new Box(900,100,50,50);


 
 }


function draw() {
 if(backgroundImg)
  background(backgroundImg);

  if(!backgroundImg){
  background("grey");
  push()
  textSize(30)
  textFont("cooper")
  text("reload the page to get background according to the time",600,670)
  pop()
}

  Engine.update(engine);
  ground.display();

  box1.display(1);
  box2.display(1);
  box3.display(1);
  box4.display(1);
  box5.display(1);

  box6.display(2);
  box7.display(2);
  box8.display(2);
  box9.display(2);
  box10.display(2);
  box11.display(2);

  box12.display(1);
  box13.display(1);
  box14.display(1);
  box15.display(1);
  box16.display(1);
  box17.display(1);

  box18.display(2);
  box19.display(2);
  box20.display(2);
  box21.display(2);

  box22.display(1);
  box23.display(1);
  box24.display(1);

  box25.display(2);
  box26.display(2);
  box27.display(2);

  box28.display(2);
  box29.display(2);

  box30.display(1);
  box31.display(1);
 
  hero.display();
  rope.display();
  monster.display();

  push()
  textSize(40);
  fill("white");
  stroke("black")
  strokeWeight(7)
  textFont("algerian")
  text("Drag the Hero and Release to launch it towards the bad monsters",20,60);
  text("Press  SPACE  to  make  the  hero  fly  if  he/she   falls !",100,630);
  pop()
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  rope.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(hero.body, {x:200, y:400})
		rope.attach(hero.body);
	}
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bg = "day.png";
  }
  else{
      bg = "night.jpg";
  }

  backgroundImg = loadImage(bg);
}