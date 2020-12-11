var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
 speed = random(223,321);
 weight = random(30,52);
 bullet = createSprite(50,200,70,40);
 thickness = random(22,83);
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = (80,80,80);
 bullet.shapeColor="white";
 
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(225,0,0);
  }else if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
  
  if(wall.x-bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;
  }
  drawSprites();
}