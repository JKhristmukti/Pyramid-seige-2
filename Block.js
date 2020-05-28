class Block{
    constructor(x, y, width, height, fill) {
        var options = {
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.fill=fill;
        this.Visibility=255;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        console.log(this.body.speed);
        if (this.body.speed < 10) {
        rectMode(CENTER);
        fill(this.fill);
        rect(pos.x,pos.y,this.width,this.height);        
        }
        else{
          World.remove(world,this.body);
          var pos = this.body.position;
          this.Visibility=this.Visibility-5;
          push();
          tint(255,this.Visibility);
          fill(this.fill);
          rect(pos.x,pos.y,this.width,this.height);
          pop();
        }
      }
}