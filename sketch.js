var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,800);
  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50, 200, 50, 10);
  bullet.velocityX=speed;
  bullet.shapeColor=("white");
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(0,0,0); 
  if (hasCollided (bullet,wall))
  {
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
   
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
      textSize(20);
      stroke("Red")
      fill("Red");
      text("Not a good wall",300,600);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
      textSize(20);
      stroke("Green")
      fill("Green");
      text("Good wall",300,600);
      text("Thank you for the $1000",400,600)
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}