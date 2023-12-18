class Ant {
    constructor(index) {
        this.locX = 0;
        this.locY = 0;
        this.velX = random(windowWidth);
        this.velY = random(windowHeight);
        this.speed = 1;

        this.index = index;
        this.currentTargetIndex = 0;

    }

    applyForce(force) {
        this.velX += force.x;
        this.velY += force.y;
    }

    follow(ant) {
        let targetX = ant.locX;
        let targetY = ant.locY;

        let dx = targetX - this.locX;
        let dy = targetY - this.locY;

        if (dx*dx + dy*dy < 100*100) {
            this.velX += dx * 0.01;
            this.velY += dy * 0.01;
        }
    }

    update() {

        this.speed = gui.getRangeValue('speed');

        if (this.index > 0) {
            this.follow(ants[this.index - 1]);
        }

        let target;
        if (this.currentTargetIndex < press.length) {
            target = press[this.currentTargetIndex];
        }


        if (target) {
            let magX = target.x - this.locX;
            let magY = target.y - this.locY;

            let weight = 0.001;
            let mag = Math.sqrt(magX * magX + magY * magY);
            let norX = weight * magX + (1 - weight) * (magX / mag);
            let norY = weight * magY + (1 - weight) * (magY / mag);

            let adjustedSpeed = this.speed * Math.min(1, mag / 100);

            this.velX = norX * adjustedSpeed;
            this.velY = norY * adjustedSpeed;

            if (Math.random() < 0.2) {
                this.locX += (Math.random() - 0.5) * 2;
                this.locY += (Math.random() - 0.5) * 2;


            }
            

            let prevLocX = this.locX;
            let prevLocY = this.locY;
        
            this.locX += this.velX;
            this.locY += this.velY;
        
            for (let i = 0; i < inkPens.length; i++) {
                let dx = this.locX - inkPens[i].x;
                let dy = this.locY - inkPens[i].y;
        
                if (dx*dx + dy*dy < 10*10) {
                    this.locX = prevLocX;
                    this.locY = prevLocY;
        
                    // Change the velocity randomly
                    this.velX = (Math.random() - 0.5) * 2;
                    this.velY = (Math.random() - 0.5) * 2;
                    break;
                }
            
        
        
        }
        }

    }

    draw() {
        let dir = createVector(this.velX, this.velY);
        dir.normalize();

        let perpDir = createVector(-dir.y, dir.x);

        fill(0);
        ellipse(this.locX, this.locY, 10, 10);

        fill(110);
        let headPos = p5.Vector.mult(dir, 7);
        ellipse(this.locX + headPos.x, this.locY + headPos.y, 10, 10);

        fill(0);
        let abdomenPos = p5.Vector.mult(dir, -7);
        ellipse(this.locX + abdomenPos.x, this.locY + abdomenPos.y, 8, 8);

        let antennaPos = p5.Vector.mult(dir, 15);
        for (let i = -1; i <= 1; i += 2) {
            let antennaEndPos = p5.Vector.add(antennaPos, p5.Vector.mult(perpDir, i * 2));
            line(this.locX, this.locY, this.locX + antennaEndPos.x, this.locY + antennaEndPos.y);
        }
    }
}
