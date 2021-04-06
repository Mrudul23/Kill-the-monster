class Hero {
    constructor(x,y,r){
      var ops_b={
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image = loadImage("superhero1.png");
      this.image2 = loadImage("superhero.png")
      this.body = Bodies.circle(x,y,r/2,ops_b);
      World.add(world,this.body);
  }
  display(){
      var spos = this.body.position;
      push();
      translate(spos.x,spos.y);
      fill(255,0,255);
      imageMode(CENTER);
      ellipseMode(RADIUS);
      if(document.getElementById('girl').checked == true) {   
        image(this.image2,0, 0, this.r+150, this.r+20);
    } else if(document.getElementById('boy').checked == true) {  
        image(this.image,0, 0, this.r+150, this.r+20);
    } else{
        image(this.image,0, 0, this.r+150, this.r+20); 
    }
      pop();
  }
 
    };