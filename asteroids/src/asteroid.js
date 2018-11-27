function Asteroid(options) {
  // MovingObject.call(this, options.radius);
  // MovingObject.call(this, options.vel);
  // MovingObject.call(this, options.color);
  
  const RADIUS = 100;
  const COLOR = 'blue';
  
  this.radius = RADIUS;
  this.color = COLOR;
  this.vel = Util.randomVec(50);
  MovingObject.call(this, options.pos);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;