class Particle {
  constructor(history, velocity = createVector(random(-1, 1), random(-1, 0))) {
    this.acceleration = createVector(0, 0);
    this.velocity = velocity;
    this.lifespan = 255;
    this.w = random(1, 10);

    this.history = history.slice();
    if (this.history.length > 0) {
      this.position = this.history[this.history.length - 1].copy();
    } else {
      this.position = createVector(0, 0)
    }
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
    this.acceleration.mult(0);
    this.lifespan -= 0.1;
  
    this.history.push(this.position.copy());
    if (this.history.length > 100) {
      this.history.splice(0, 1);
    }

    this.velocity.add(createVector(random(-1, 1), random(-1, 1)));

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