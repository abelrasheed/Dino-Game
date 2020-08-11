class Dino {
constructor(){
  this.y=415;
  this.x=60;
  this.gravity =1.2;
  this.velocity=12;
} 
 show() {
  fill(200,40,60);
  image(dino_img,this.x ,this.y, 250, 150);
 }

 update(){
   this.velocity-=this.gravity;
   this.y-=this.velocity;

   if(this.y>415){
     this.velocity=0;
     this.y=415;
   }
 }
}
