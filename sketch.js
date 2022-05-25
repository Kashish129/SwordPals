var swordWomen , bg;
var backgroundImg, swordImg, dragonImg;
var dragonGroup;


function preload()
{
  backgroundImg = loadImage("darkhell.jpg");
  swordImg =loadImage("sword.gif");
  dragonImg = loadImage("dragon.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg. addImage(backgroundImg,"background");
  bg.scale= 5.9;
  bg.velocityX= -2;
  
  swordWomen = createSprite(100,400,20,20);
  swordWomen. addImage(swordImg,"Worrior");

  dragonGroup= new Group();

}

function draw() {
  background(0);
  
  if (bg.x < 0){
    bg.x = bg.width;
  }

  spawnDragons();


  drawSprites();
  
}

function spawnDragons()
{
  if (frameCount % 450=== 0 )
  {
    var dragon= createSprite(500,Math.round(random(100, 350),20,20));
    dragon.addImage("dragon",dragonImg)

    dragon.velocityX=-2

    dragon.scale= 0.3;
    dragon.lifetime = 300;
    dragonGroup.add(dragon);
  
  }
}