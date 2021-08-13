class ComputerArcher {
constructor(x, y, width, height) {
const options = {
isStatic: true
};
this.body = Matter.Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("./assets/archery1.png");
Matter.Body.setAngle(this.body, PI/2); 
World.add(world, this.body);
}
  
display() {
var pos = this.body.position;
var angle = this.body.angle;
push();
rotate(angle);
translate(pos.x, pos.y);
image(this.image, 0, 0, this.width, this.height);
imageMode(CENTER);
pop();
}
}