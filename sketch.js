let gravity;
let particles = [];

let firstParticleHistory = [];
let firstParticleVelocity = createVector(0, 0);


function setup() {
  createCanvas(500, 1300);
  gravity = createVector(0, 0.05);
}


function draw() {
  background(220);


  if (particles.length > 0) {
    let newParticle = new Particle(particles[0].history.slice(), particles[0].velocity.copy());
    particles.push(newParticle);
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();

    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

function mouseClicked() {
  let p = new Particle([createVector(mouseX, mouseY)], createVector(0, 0));
  particles.push(p);
}