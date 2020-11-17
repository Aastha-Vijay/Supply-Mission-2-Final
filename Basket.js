class Basket{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;

        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("white");
      stroke("blue");
      strokeWeight(3);
      rect(0, 0, this.width, this.height);
      pop();
    }
};