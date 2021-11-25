let inc=0.01;
let scl=20;
let cols, rows;

function setup() {
  cnv=createCanvas(750, 575);
  pixelDensity(1);
  cols=floor(width/scl);
  rows=floor(height/scl);
  d = 10;
  g = 30;
}

function draw() {
  background(g);
  let yoff=0;
  for (let y=0; y<rows; y++) {
  let xoff=0;
    for (let x=0; x<cols; x++) {
    let index=(x+y*width)*4;
      let t=noise(xoff, yoff)*255;
      xoff+=inc;
      fill(random(255));
      rect(x*scl,y*scl,scl,scl);
    }
    yoff+=inc;
  }
}
