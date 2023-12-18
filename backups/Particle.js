class Particle {
  constructor(history, velocity = createVector(1, 1), acceleration = createVector(0, 0)) {
    this.acceleration = acceleration;
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
    this.acceleration.mult(0);
    this.lifespan -= 0.1;

    // If this is the first particle, update its velocity randomly
    if (this.isFirst) {
      this.velocity.add(createVector(random(-1, 1), random(-1, 1)));
    } 

    this.position.add(this.velocity);
    this.history.push(this.position.copy());

    // For other particles, follow the first particle's position with a delay
    if (!this.isFirst && particles[0].history.length > 10) {
      this.position = particles[0].history[particles[0].history.length - 10].copy();
    }

    if (this.history.length > 100) {
      this.history.splice(0, 1);
    }
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