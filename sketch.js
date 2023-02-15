var ship,shipImages,sea,seaImage;
function preload(){
shipImages=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  7
  //
  sea = createSprite(200,200,400,400);
  sea.addImage("nose para que sirve esto", seaImage);
  sea.scale=0.4

  //barco,animacion y tamaño
  ship = createSprite(100,200,100,100);
  ship.addAnimation("shipas",shipImages);
  ship.scale=0.2

}

function draw() {
   background("blue");

   drawSprites();
 
  
}