class ComputerArrow {
constructor(x, y, width, height, archerAngle) {
var options = {
restitution: 0.8,
friction: 1.0,
density: 1.0,
isStatic: true
};
this.width = width;
this.height = height;
this.image = loadImage("./assets/arrow.png"); 
this.body = Bodies.rectangle(x, y, this.width, this.height, options);  
World.add(world, this.body);;
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