class Bob {
    constructor(x, y,r) {
      var options = {
        isStatic:false,
        density:0.8,
        friction: 0,
        restitution:1
      };
      this.x = x;
      this.y = y;
      this.r=r

      this.body = Bodies.circle(this.x,this. y, (this.r)/2, options);
     
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER)
      //strokeWeight(3);
      fill('orange')
      
      ellicse(0, 0, this.r, this.r);
      pop();
    };
  };
  