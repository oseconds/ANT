class Mover {
    constructor(interval, v, s, isFirst, firstMover, index) { // Add isFirst, firstMover, and index parameters
        this.x = mouseX;
        this.y = mouseY;
        this.interval = interval;
        this.speed = s;
        this.v = v;
    
        this.isFirst = isFirst;
        this.firstMover = firstMover;
        this.index = index; // Add this line
    
        this.targetHistory = [];
      }


      update() {
        if (this.isFirst && frameCount % this.interval === 0) {
          this.xl = this.x + random(-this.v, this.v);
          this.yl = this.y + random(-this.v, this.v);
          this.targetHistory.unshift({ x: this.xl, y: this.yl }); // Use this.targetHistory instead of this.firstMover.targetHistory
        } else if (this.firstMover && this.firstMover.targetHistory.length > this.index) {
          let target = this.firstMover.targetHistory[this.index];
          this.xl = target.x;
          this.yl = target.y;
        }
        // ...
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
        this.xlHistory = [...otherMover.xlHistory];
        this.ylHistory = [...otherMover.ylHistory];
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

    setInterval(interval) {
        this.interval = interval;
    }
}