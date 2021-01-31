function istouching(movingrect,gameobj1){
    if((movingrect.x-gameobj1.x<gameobj1.width/2+movingrect.width/2)&&(gameobj1.x-movingrect.x<gameobj1.width/2+movingrect.width/2)&&(movingrect.y-gameobj1.y<gameobj1.width/2+movingrect.width/2)&&(gameobj1.y-movingrect.y<gameobj1.width/2+movingrect.width/2)){
     return true;
  
    }else{
     return false; 
    }
  
  }