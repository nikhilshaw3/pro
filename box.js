class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, RADIUS,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(56,400,25,25)
    strokeWeight(4);
    stroke("red")
    fill(255);

    pop();
  }
};