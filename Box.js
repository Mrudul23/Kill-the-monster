class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("monster2.png")
    this.image2 = loadImage ("monster.png")
    this.Visiblity = 255
    
    World.add(world, this.body);
  }
  display(num){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("red");
    if(num ===1 )
    image(this.image,0,0, this.height+20,this.width+20);
    if(num === 2)
    image(this.image2,0,0, this.height+20,this.width+20);
    pop();
  }
  
}