class Snow {
    constructor() {
      var options = {
          density: 0.3,friction:1,restitution:0.03
      }
      this.body = Bodies.circle(random(0,1000),-50,70,options);
     this.image = loadImage("snow4.webp")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS)
      image(this.image,pos.x, pos.y, 70,70);
    }
  };
