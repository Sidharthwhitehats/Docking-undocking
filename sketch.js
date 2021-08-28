var iss,spacecraft,hasDocked;
var spacebg;
var issImg,backgroundImg,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img


function preload(){
  issImg= loadImage("/Docking-undocking/iss.png");
  backgroundImg =  loadImage("/Docking-undocking/spacebg.jpg");
  spacecraft1Img=  loadImage("/Docking-undocking/spacecraft1.png");
  spacecraft2Img=  loadImage("/Docking-undocking/spacecraft2.png");
  spacecraft3Img=  loadImage("/Docking-undocking/spacecraft3.png");
  spacecraft4Img=  loadImage("/Docking-undocking/spacecraft4.png");
}
  
  

function setup() {
  createCanvas(1600,800);
  hasDocked= false;
 iss= createSprite(400, 300, 400, 400);
 iss.scale=0.9;
 iss.addImage("running",issImg);

spacecraft= createSprite(400,600,50,50);
spacecraft.addImage(spacecraft1Img);
spacecraft.scale=0.3;
}


function draw() {
  
  background(backgroundImg);  
  
  iss.display();
  spacecraft.display();
  if(!hasDocked)
  {
    
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.velocityX=-1;
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.velocityX=1;
    }
 
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2Img);
      
    }

    if(keyDown(UP_ARROW)){
      spacecraft.velocityY=-1;
    }

  }

 
  drawSprites();
 
}