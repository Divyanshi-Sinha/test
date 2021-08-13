class PlayerArrow {
constructor(x, y, width, height) {
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
World.add(world, this.body);
}
shoot(archerAngle) {
var velocity = p5.Vector.fromAngle(archerAngle);
velocity.mult(20);
Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
Matter.Body.setStatic(this.body, false);

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