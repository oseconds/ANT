let movers = [];
let limit = 10;
let r = 300;
let bs = 30;
let ss = 20;
let v = 300;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,255);

  // for (let i = 0; i < limit; i++){
  //   movers.push(new Mover(0.005,0.01));
  // }

}

function draw() {
  background(0,255);

  for (let i = 0; i < movers.length; i++) {
    movers[i].update();

    if (i > 0) {
      movers[i].drawConnection(movers[i - 1]);
    }

    movers[i].draw();
  }
}

function mouseClicked(){
  
  let isFirst = movers.length === 0;
  let newMover = new Mover(60,3,0.1, isFirst);
  movers.push(newMover);

  if (movers.length > limit){
    movers.shift();
  }

  if (movers.length > 1) {
    let previousMover = movers[movers.length - 2];
    newMover.addConnection(previousMover);
  }
}