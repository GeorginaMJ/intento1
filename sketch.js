var flecha1;
var flecha2;
var flecha3;
var flecha4;
var musica;
var fondo;
var Flecha1;
var reloj=0;

function preload(){
 Flecha1=loadImage("prueba2.png");
  flecha2=loadImage("th2.png");
   flecha3=loadImage("Circulo_1.fnf.png");
  musica=loadSound("VsAnime.mp3");
  fondo=loadImage("fondoC.jpg")

}

function setup(){
  createCanvas(displayWidth,displayHeight)
  musica.play()
 
   flecha2 = createSprite(50,160,20,50);
   flecha3 = createSprite(50,160,20,50);
   flecha4 = createSprite(50,160,20,50);
  
}
function draw(){
  background(fondo);
  flechasD();
  drawSprites();
}

function flechasD ()
{
  if (frameCount%60==0){
    
  flecha1 = createSprite(displayWidth/4,displayHeight,20,50);
  flecha1.addImage(Flecha1) ;
  console.log(displayWidth)
    flecha1.velocityY=-18;
  flecha1.x=Math.round(random(displayWidth-displayWidth+100,displayWidth-100));
  flecha1.scale=0.5;
  flecha1.lifetime=displayHeight/flecha1.velocityY;
  if(keyDown("right")){
  //sumar puntos al score
  console.log("punto")
  }
   // gruponbs.add(Nube);

  }
}


function flechasA ()
{
  if (frameCount%60==0){
    
  flecha2 = createSprite(displayWidth/4,displayHeight,20,50);
  flecha2.addImage(Flecha2) ;
  console.log(displayWidth)
    flecha2.velocityY=-18;
  flecha2.x=Math.round(random(displayWidth-displayWidth+100,displayWidth-100));
  flecha2.scale=0.5;
  flecha2.lifetime=displayHeight/flecha2.velocityY;

   // gruponbs.add(Nube);

  }
}


function flechasB ()
{
  if (frameCount%60==0){
    
  flecha3 = createSprite(displayWidth/4,displayHeight,20,50);
  flecha3.addImage(Flecha3) ;
  console.log(displayWidth)
    flecha3.velocityY=-18;
  flecha3.x=Math.round(random(displayWidth-displayWidth+100,displayWidth-100));
  flecha3.scale=0.5;
  flecha3.lifetime=displayHeight/flecha3.velocityY;
   // gruponbs.add(Nube);

  }
}

function flechasI ()
{
  if (frameCount%60==0){
    
  flecha4 = createSprite(displayWidth/4,displayHeight,20,50);
  flecha4.addImage(Flecha4) ;
  console.log(displayWidth)
    flecha4.velocityY=-18;
  flecha4.x=Math.round(random(displayWidth-displayWidth+100,displayWidth-100));
  flecha4.scale=0.5;
  flecha4.lifetime=displayHeight/flecha4.velocityY;
   // gruponbs.add(Nube);

  }
}



