class Pig {
    constructor(x, y ) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 25, options);
     this.radius=25;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("green");
      ellipse(0,0, this.radius);
      pop();
    }
  };
  