class Monster {
  constructor(x,y,h,w)
	{
		var options = { 
      density: 10, 
      frictionAir: 0,
	  friction : 1.2
    };
		this.x=x;
		this.y=y;
		this.h=h;
		this.w = w
		this.image=loadImage("monster1.png");
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options);
		this.Visiblity = 255;
		World.add(world, this.body);
	}

	display(){
			if(this.body.speed<10) {
				var monsterPos=this.body.position;		
				push()
				translate(monsterPos.x, monsterPos.y);
				imageMode(CENTER);
				image(this.image, 0,0,this.w+100, this.h+100);
				pop();
			}
			else{
				World.remove(world, this.body);
				push();
				this.Visiblity = this.Visiblity - 5;
				tint(255,this.Visiblity);
				image(this.image, this.body.position.x-150, this.body.position.y-210, this.w+100, this.h+100);
				textAlign(CENTER);
				textSize(25);
				push();
				fill(0, 0, 0,170);
				rect(width/2, 300, 250, 150);
				pop();
				text("Well done Hero !! You have saved the town from     the monsters 👹",width/2,320,200,150)
				pop();
			}
	}
}
