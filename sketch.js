let movers = [];
let limit = 10;
let r = 300;
let bs = 30;
let ss = 20;
let v = 300;

var gui;
var guis = [];

var interval = 30;
var intervalMin = 10;
var intervalMax = 360;
var initialinterval = 30;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,255);

  gui = QuickSettings.create(10, 10, 'My GUI');
  gui.addRange('interval', intervalMin, intervalMax, initialinterval, 1);

  // for (let i = 0; i < limit; i++){
  //   movers.push(new Mover(0.005,0.01));
  // }

}

function draw() {
  background(0,255);

  for (let i = 0; i < movers.length; i++) {
    movers[i].setInterval(gui.getRangeValue('interval'));
    movers[i].update();

    if (i > 0) {
      movers[i].drawConnection(movers[i - 1]);
    }

    movers[i].draw();

  }


}

function mouseClicked() {
  let isFirst = movers.length === 0;
  let firstMover = null;

  if (!isFirst) {
    firstMover = movers[0];
  }

  let index = movers.length; // Add this line
  let newMover = new Mover(360, 3, 0.1, isFirst, firstMover, index); // Modify this line
  movers.push(newMover);

  if (movers.length > limit) {
    movers.shift();
  }
}