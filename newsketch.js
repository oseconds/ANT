let ant;
let ants = [];
let press = [];
let target = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 255);
    ant = new Ant();
}

function draw() {
    background(255, 255);
    for (let i = 0; i < ants.length; i++) {
        ants[i].update();
        ants[i].draw();
    }
}

function mousePressed() {
    let cv = createVector(mouseX, mouseY);
    press.push(cv);
    ants.push(new Ant(press.length - 1));
}

class Ant {
    constructor(index) {
        // this.x = x;
        // this.y = y;
        this.locX = 0;
        this.locY = 0;
        this.velX = random(windowWidth);
        this.velY = random(windowHeight);
        this.speed = 1;

        this.index = index;
        this.currentTargetIndex = 0;
    }

    update() {
            let target;
            if (this.index === 0) {
                target = press[press.length - 1];
            } else if (this.currentTargetIndex < press.length) {
                target = press[this.currentTargetIndex];
            }
    
            if (target) {
                let magX = target.x - this.locX;
                let magY = target.y - this.locY;
    
                let mag = Math.sqrt(magX * magX + magY * magY);
                let norX = magX / mag; 
                let norY = magY / mag;

                let adjustedSpeed = this.speed * Math.min(1, mag / 100);
    

                this.velX = norX * adjustedSpeed;
                this.velY = norY * adjustedSpeed;

                if (Math.random() < 0.000001)
                this.velX += (Math.random() - 0.5) * 1;
                this.velY += (Math.random() - 0.5) * 1;
        
                this.locX += this.velX;
                this.locY += this.velY;
    
                // If the Ant has reached the target, increase the currentTargetIndex to move to the next target
                if (dist(this.locX, this.locY, target.x, target.y) < 15) {
                    this.currentTargetIndex++;
                }
            }
        
    }

    draw() {
        fill(0);
        ellipse(this.locX, this.locY, 10, 10);
    }
}