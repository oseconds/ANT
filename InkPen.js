class InkPen {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        fill(0, 0, 255, 255);
        ellipse(this.x, this.y, 10);
    }
}
