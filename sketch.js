const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var circle1,circle2,circle3;
var circle=[]

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);

  //circle1 = new Circles(100,50,20);
  //circle2 = new Circles(280,30,20);
  //circle3 = new Circles(500,200,20);

  for(var i = 0;i < 800; i = i +50 ){
    circle.push(new circles(i,50,20));
    console.log(i);
  }

  circle.push(4);
  circle.push(12);
  circle.push(13);
  console.log(circle);


}

function draw() {
  background("black"); 
 // circle1.display();
 // circle2.display();
 // circle3.display();
  for(var i = 0;i < circle.length; i = i +50 ){
    Circle[i].display();  
  }
  
  for (var i = 0; i < circle.length; i++) { 
    circle[i].display(); 
  }


  drawSprites();
  Engine.update(engine);
}