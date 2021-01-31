var fixedrect;
var movingrect;
function setup() {

  createCanvas(1200,800);
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,50);
  movingrect.shapeColor="green";
  gameobj1=createSprite(200,200,50,50);
  gameobj1.shapeColor="green";
  gameobj2=createSprite(300,200,50,50);
  gameobj2.shapeColor="green";
  gameobj3=createSprite(400,200,50,50);
  gameobj3.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX ;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x);
 

  if(istouching(movingrect,gameobj1)){
    movingrect.shapeColor="red";
    gameobj1.shapeColor="red";

  }else{
    movingrect.shapeColor="green";
    gameobj1.shapeColor="green";
  }
  if(istouching(movingrect,gameobj2)){
    movingrect.shapeColor="red";
    gameobj2.shapeColor="red";

  }else{
    movingrect.shapeColor="green";
    gameobj2.shapeColor="green";
  }
  if(istouching(movingrect,gameobj3)){
    movingrect.shapeColor="red";
    gameobj3.shapeColor="red";

  }else{
    movingrect.shapeColor="green";
    gameobj3.shapeColor="green";
  }
 
 darwSprites();
}
 
  