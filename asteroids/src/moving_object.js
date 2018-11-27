function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function() {
  return this.pos = [this.pos[0] + this.vel[0], this.pos[1]+this.vel[1]];
};

module.exports = {MovingObject: MovingObject};

// Circle.prototype.render = function (ctx) {
//   ctx.fillStyle = this.color;
//   ctx.beginPath();
// 
//   ctx.arc(
//     this.centerX,
//     this.centerY,
//     this.radius,
//     0,
//     2 * Math.PI,
//     false
//   );
// 
//   ctx.fill();
// };

// 
// 
// Circle.prototype.moveRandom = function (maxX, maxY) {
//   let dx = (Math.random() * 2) - 1;
//   let dy = (Math.random() * 2) - 1;
// 
//   this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);
//   this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);
// };

