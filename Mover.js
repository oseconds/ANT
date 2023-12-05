class Mover {
    constructor(r,v, s, isFirst = false) {
        this.x = mouseX;
        this.y = mouseY;
        this.xl = random(width);
        this.yl = random(height);
        this.rate = r;
        this.speed = s;
        this.connections = [];
        this.isFirst = isFirst;
        this.v = v;
        this.previousXl = this.x;
        this.previousYl = this.y;
    }


    update() {
        if (this.isFirst) {
            if (frameCount % this.rate === 0) {
                this.previousXl = this.xl;
                this.previousYl = this.yl;
                this.xl = this.x + random(-v, v);
                this.yl = this.y + random(-v, v);
            }
        } else if (this.connections.length > 0) {
            let previousMover = this.connections[0];
            this.xl = previousMover.previousXl;
            this.yl = previousMover.previousYl;
        }


        this.x = lerp(this.x, this.xl, this.speed);
        this.y = lerp(this.y, this.yl, this.speed);

        this.checkEdges();
    }

    checkEdges() {
        if (this.x > width) {
            this.x = width;
            this.xl = width - v;
        } else if (this.x < 0) {
            this.x = 0;
            this.xl = v;
        }

        if (this.y > height) {
            this.y = height;
            this.yl = height - v;
        } else if (this.y < 0) {
            this.y = 0;
            this.yl = v;
        }
    }


    addConnection(otherMover) {
        this.connections.unshift(otherMover);
        this.previousXl = otherMover.previousXl;
        this.previousYl = otherMover.previousYl;
    }

    drawConnection(otherMover) {
        let d = dist(this.x, this.y, otherMover.x, otherMover.y);
        if (d < r) {
            let sw = map(d, 0, r, ss, 1);
            let sf = map(sw, 20, 1, 255, 50);
            strokeWeight(sw);
            stroke(255, sf);
            line(this.x, this.y, otherMover.x, otherMover.y);
        }
    }

    draw() {
        strokeWeight(bs);
        stroke(255, 180, 50, 255);
        point(this.x, this.y);

    }
}