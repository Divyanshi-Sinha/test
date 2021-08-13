class PlayerArcher {
constructor(x, y, width, height) {
const options = {
isStatic: true
};
this.body = Matter.Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("./assets/archery.png");
Matter.Body.setAngle(this.body, -PI/2); 
World.add(world, this.body);
}
display() {
var pos = this.body.position;
var angle = this.body.angle;
if (keyIsDown(UP_ARROW) && angle > -1.9) {
angle -= 0.01;
Matter.Body.setAngle(this.body, angle);
}

if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
angle += 0.01;
Matter.Body.setAngle(this.body, angle);
}              
push();
rotate(angle);
translate(pos.x, pos.y);
image(this.image, 0, 0, this.width, this.height);
imageMode(CENTER);
pop();
}
}