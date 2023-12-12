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
    background(0, 255);
    for(let i = 0; i < target.length; i++){
        ants[i].update(press[].x, press[].y);
        ants[i].draw();
    }
}

function mousePressed(){
    target.push(press[length-1]);
    let cv = createVector(mouseX, mouseY);
    press.push(cv);
    ants.push(new Ant());
    // console.log(target[target.length-1]);
}

class Ant {
    constructor(){
        // this.x = x;
        // this.y = y;
        this.locX = random(windowWidth);
        this.locY = random(windowHeight);
        this.velX = random(windowWidth);
        this.velY = random(windowHeight);
        this.speed = 15;
    }

    update(x, y) {
        let magX = x-this.locX;
        let magY = y-this.locY;

        let norX = magX / windowWidth; 
        let norY = magY / windowHeight;

        this.velX = norX * this.speed;
        this.velY = norY * this.speed;

        this.locX += this.velX;
        this.locY += this.velY;
    }

    draw() {
        fill(255);
        ellipse(this.locX, this.locY, 10, 10);
    }
}