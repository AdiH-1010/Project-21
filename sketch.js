var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1250, 200, thickness, height/2);
  bullet = createSprite(50, 200, 10, 10);

  bullet.velocityX = speed;

  wall.shapeColor = rgb(80, 80, 80);
}

function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed* speed/(thickness * thickness * thickness);

    if(damage >= 10){
      bullet.shapeColor = color(255, 0, 0);
    }

    if(damage < 10){
      bullet.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }
  return false;
}