const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, ball1, base, ball2,ball3, ball4, ball5,rope1,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  ball3 = new Ball(width / 2, height / 2, 0);
  ball4= new Ball(width / 2+80, height / 2, 0);
  ball2 = new Ball(width / 2-80, height / 2, 0);
  ball5 = new Ball(width / 2+160, height / 2, 0);
  ball1 = new Ball(width / 2 - 160, height / 2, 0);
  rope1 = new Sling(ball1.body, { x: width / 2 - 160, y: 100 });
  rope2 = new Sling(ball2.body, { x: width / 2 - 80, y: 100 });
  rope3 = new Sling(ball3.body, { x: width / 2 , y: 100 });
  rope4 = new Sling(ball4.body, { x: width / 2 +80, y: 100 });
  rope5 = new Sling(ball5.body, { x: width / 2 + 160, y: 100 });
  base = new Base(width / 2, height / 2 - 200, 400, 20);
}

function draw() {
  background(0);
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  base.display();
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}

// function mouseReleased() {
//   Matter.Body.setPosition(ball5.body, { x: null, y: null });
// }