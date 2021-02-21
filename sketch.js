var bullet ;
var wall;
var speed;
var weight;
var thickness;


function setup() {
  createCanvas(800,1000);
 bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(600,200,thickness,70);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(20,83);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  

 if (collision(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
 }
 if (damage>10){
   wall.shapeColor=color(255,0,0)
 }
 if (damage<10){
  wall.shapeColor=color(0,255,0);
}
   
    
  
  drawSprites();


}


function collision(bullet1,wall1) {

bulletright=bullet1.x+bullet1.width;
wallleft=wall1.x;

if(bulletright<wallleft){
  return true;
}

  return false;

}



