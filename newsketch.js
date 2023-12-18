let ant;
let ants = [];
let press = [];
let target = [];

let gui;

let inkPens = [];

defaultSpeed = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 255);
    ant = new Ant();

    gui = QuickSettings.create(10, 10, 'My GUI');
    gui.addButton('Reset', resetValues);
    gui.addRange('speed', 0, 5, defaultSpeed, 0.1); 

    setInterval(() => {
        let cv = createVector(random(windowWidth), random(windowHeight));
        press.push(cv);
        ants.push(new Ant(press.length - 1));
    }, 500);
}

function draw() {
    background(255, 255);

    for (let i = 0; i < inkPens.length; i++) {
        inkPens[i].display();
    }

    for (let i = 0; i < ants.length; i++) {
        ants[i].update();
        ants[i].draw();
    }
}

function mouseDragged() {
    inkPens.push(new InkPen(mouseX, mouseY));
}

function resetValues() {
    gui.setRangeValue('speed', defaultSpeed); 
}

class InkPen {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        fill(0,0,255,255);
        ellipse(this.x, this.y, 10);
    }
}
