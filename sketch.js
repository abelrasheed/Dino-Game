var dino;
var gameOver=0;
var plants = [];
var distan =0;
let dino_img;
let bg_img;
let cactus_img;
var count = 0;

function preload() {
  dino_img = loadImage("trex3.png")
  bg_img = loadImage("background4.jpg")
  cactus_img = loadImage("Cactus.png")
}

function setup() {
  // put the initial conditions here
  createCanvas(1500,700);
  dino = new Dino();
  plants.push(new Plant());



}

function draw() {
  // drawing code
  mainFunc();
}
function mainFunc(){

  background(bg_img);
  dino.show();
  dino.update();
  fill(0);
  stroke(200);
  line(0,565,1500,565);
 

 
  textSize(25);
  text("Press space to jump",1200,100);
  text("Distance :",1200,150);
  text(distan,1330,150);
  count += 1;
  distan+=1;
  
  if(random(1) < .015 && plants.length < 2 ){
    
    if (count <= 13 || count >=24){
   
    plants.push(new Plant());
    
    
    count = 0;
    } 
  }
  if(plants.length == 0){
 
    count = 0;
    plants.push(new Plant());
  }
  for(var i=plants.length-1; i>=0; i--){
    plants[i].show();

    plants[i].update();
    
    
    if( dino.y+160 > 565-plants[i].h && plants[i].x + 6 ==210 ){
     textSize(70);

     text("GAME OVER",500,350);
     textSize(35);
     text("F5 to restart",600,400);
     
     noLoop();     
    }    
    if (plants[i].offScreen()){
      plants.splice(i,1);
    }

  }
}

function keyPressed(){
  if(key == " "){
     if(dino.y==415){
      dino.velocity=21;
     }
  }

  if(key == "r"){
  distan = 0;
  plants = [];
  mainfunc();
  loop();
  }
}
