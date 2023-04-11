const WIDTH = 320;
const HEIGHT = 240;
const NUM_OF_PTS = 80;

let capture;
let thrsImg;
let pts = [];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  capture = createCapture(VIDEO);
  capture.size(WIDTH, HEIGHT);
  capture.hide();
  pixelDensity(1);
  noStroke();
  fill(255, 0, 0);
  textSize(8);
}

function draw() {
  background(255);
  //fill(255);
  capture.loadPixels();
  fill(0);
  for (let y = 0; y < height; y += 6) {
    for (let x = 0; x < width; x += 6) {
      let col = capture.get(x, y);
      let c = color(red(col), red(col), blue(col));
      let b = brightness(c);
      if (b < 20) {
        text('A', x, y);
      } else if (b < 35){
        text('g', x, y);
      } else if (b < 50){
        text('o', x, y);
      } else if (b < 80) {
        text('*', x , y);
      } else if (b < 100) {
        text(',', x , y);
      } else if (b < 120) {
        text('-', x , y);
      } else if (b < 160) {
        text('.', x , y);
      } else {
        //text('.', x , y);
      }
      //fill(red(col),green(col),blue(col),128)
      //ellipse(x,y,10);
  }
}
}