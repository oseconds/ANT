class Walker {
    constructor(previousWalker) {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0, 0);
        this.w = 20;
        this.previousWalker = previousWalker;
    }

    update() {
        if (this.previousWalker) {
            let a = this.previousWalker.pos.copy();
            this.pos = a;
        } else {
            let a = createVector(random(-0.03, 0.03), random(-0.03, 0.03));
            this.pos.add(this.vel);
            this.pos.add(a);
            this.vel.add(a);
        }

        if (this.pos.x > windowWidth) {
            this.pos.x = (windowWidth / 2, windowHeight / 2);
            this.pos.y = (windowWidth / 2, windowHeight / 2);
        }
        if (this.pos.x < 0) {
            this.pos.x = (windowWidth / 2, windowHeight / 2);
            this.pos.y = (windowWidth / 2, windowHeight / 2);
        }
    }

    display() {
        ellipse(this.pos.x, this.pos.y, this.w);
    }
}
