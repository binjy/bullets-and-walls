var bullet,bullet2,bullet3,bullet4,line1,line2,line3,line4,wall,wall2, wall3,wall4
var thickness,speed,weight










function setup() {
  createCanvas(800,400);

wall = createSprite(368,24,10,30)

  bullet = createSprite(25,19,9,9)
  
   bullet2 = createSprite(22,118,9,9)
  
  line2 = createSprite(19,174,900,10)
  
   bullet3 = createSprite(20,230,9,9)
  
  line3 = createSprite(19,259,900,9)
  
  line1 = createSprite(32,60,900,10)
  
  wall2 = createSprite(363,113,10,30)
  wall3 = createSprite(360,212,10,30)
  wall4 = createSprite(363,289,10,30)
  
  
   bullet4 = createSprite(19,299,9,9)
  
  
  speed = random(55,90)
  weight = random(400,1500)
  bullet.velocityX = speed
   bullet2.velocityX = speed
   bullet3.velocityX = speed
 bullet4.velocityX = speed  
}

function draw() {
  background("white");  



if ( bullet.isTouching(wall)) {
  reset()
}

if ( bullet2.isTouching(wall)) {
  reset()
}

if ( bullet3.isTouching(wall)) {
  reset()
}

if ( bullet4.isTouching(wall)) {
  reset()
}





if (keyDown("space")) {
   bullet.velocityX = speed
   bullet2.velocityX = speed
   bullet3.velocityX = speed
   bullet4.velocityX = speed
}


if (wall.x-bullet.x <(bullet.width+wall.width)/2) {
bullet.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509
}

if(deformation>180){
  bullet.shapeColor = color(255,0,0)
  
}

if(deformation<160 && deformation>100){
bullet.shapeColor  = color(230,230,0) 
  
}


























if (wall2.x-bullet2.x <(bullet.width+wall2.width)/2) {
bullet2.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509
}

if(deformation>180){
  bullet2.shapeColor = color(255,0,0)
  
}

if(deformation<160 && deformation>100){
bullet2.shapeColor  = color(230,230,0) 
  
}


















if (wall3.x-bullet3.x <(bullet3.width+wall3.width)/2) {
bullet3.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509
}

if(deformation>180){
  bullet3.shapeColor = color(255,0,0)
  
}

if(deformation<160 && deformation>100){
bullet3.shapeColor  = color(230,230,0) 
  
}
















if (bullet3.x- bullet.x <( bullet4.width+wall3.width)/2) {
 bullet4.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509
}

if(deformation>180){
   bullet4.shapeColor = color(255,0,0)
  
}

if(deformation<160 && deformation>100){
 bullet4.shapeColor  = color(230,230,0) 
  
}







  drawSprites();
}





function reset(){
  bullet.x = 25
  bullet.y = 19
  bullet2.x=22
  bullet2.y=118
  bullet3.x=20
  bullet3.y =230
  bullet4.x = 19
  bullet4.y =299
 
   bullet.velocityX = 0
   bullet2.velocityX = 0
   bullet3.velocityX = 0
   bullet4.velocityX = 0
}