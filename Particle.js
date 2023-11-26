class Particle {
  constructor(position, velocity = createVector(random(-1, 1), random(-1, 0))) {
    this.acceleration = createVector(0, 0);
    this.velocity = velocity;
    this.position = position.copy();
    this.lifespan = 255;
    this.w = random(1, 10);
  }

  run() {
    this.update();
    this.display();
  }
  
  applyForce(aForce) {
    this.acceleration.add(aForce);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
    
    this.acceleration = createVector(0, 0);
  }

  display() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, this.w, this.w);
  }

  isDead() {
    return this.lifespan < 0;
  }

  clone() {
    let newPosition = this.position.copy();
    newPosition.sub(this.velocity.copy()); // Subtract the velocity from the position
    return new Particle(newPosition, this.velocity.copy());
  }
}