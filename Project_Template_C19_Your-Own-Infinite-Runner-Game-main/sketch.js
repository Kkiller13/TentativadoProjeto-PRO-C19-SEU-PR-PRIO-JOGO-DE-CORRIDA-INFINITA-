var stickman
var groundimage
var stickmanrunning
var stickmanidle
var ground
var jump
var obstaclesGroup
var gamestate
var obstacle

function preload(){
    stickmanrunning = loadImage("pixil1.png")
    stickmanidle = loadImage("pixil2.png")
    groundimage = loadImage("groundimage(2).png")
}

function setup() {

 createCanvas(window.innerWidth,window.innerHeight)
 stickman = createSprite(200,10)
 frameRate(30);
 ground = createSprite(width/2,height*1.1)
 gamestate = "play"
 
}



function draw() {
background("WHITE")


if(gamestage = "play"){
    playermovement()
    playersettings()
    groundopitions()
    obstacles()
}
else{ 
text("Game Over", width/2,height/2);

}
drawSprites()
}



function playersettings(){

    stickman.addImage(stickmanrunning)
    stickman.scale = window.innerWidth / 30000
    stickman.velocityY = stickman.velocityY + 0.4
    stickman.collide(ground)
}

function playermovement(){
   if (keyDown("space")) {
    stickman.velocityY = -10
    } 
   
}
function groundopitions(){
    ground.velocityX = 10
    ground.addImage(groundimage)
    if(ground.x > width/2){
         ground.x = 800
    }
}

function obstacles(){
    if(World.frameCount %  60 == 0){
       obstacle =createSprite(width,Math.round(random(50, height)));
       console.log(obstacle.x)
       obstacle.velocityX = -10
       obstaclesGroup.add(obstacle)
    }
   // if(obstacle.x > width){
   //     obstacle.destroy()                  <---------Sei la oque ta acontecendo aqui :(
   //}
   //  if(stickman.isTouching(obstacle)){        <-----nem aqui :(
        //gamestate = "end"
//}
}

