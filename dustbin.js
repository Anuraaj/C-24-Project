class Dustbin {
    constructor(x, y,) 
    {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic': true
      }
      this.x = x;
      this.y = y;      
     
      this.body = Bodies.rectangle(this.x,this.y,this.r,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill(255,0,255);
      rectMode(0,0,);
      pop();
    }
  };