let gravity;
let particles = [];

function setup() {
  createCanvas(500, 1300);
  gravity = createVector(0, 0.05);
}

function draw() {
  background(220);
  
  if (particles.length > 0) {
    let newParticle = particles[particles.length - 1].clone();
    particles.push(newParticle);
  
    for (let i = 0; i < particles.length; i++) {
      particles[i].run();
  
      if (particles[i].isDead()) {
        particles.splice(i, 1);
      }
    }
  }
}

function mouseClicked() {
  let mpos = createVector(mouseX, mouseY);
  let p = new Particle(mpos);
  particles.push(p);
}