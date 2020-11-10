class Dustbin{
    constructor(x,y,width,height){
       var options={
        isStatic:true
      }
       this.body=Bodies.rectangle(x,y,width,120,options);
       this.width=width;
       this.height=120;
       this.image=loadImage("dustbingreen.png");
       World.add(world,this.body);
}
    display(){
      var pos=this.body.position;
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,640,465,this.width,120);
    }
}