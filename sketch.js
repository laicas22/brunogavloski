var input, value;

function setup() {
 // let myCanvas = ();
  noCanvas();
  input = createInput();
 input.changed(newText);
  

 let canvas = createCanvas(600, 400);
  canvas.position(300, 50);

  let txt = createDiv('This is an HTML string!');
  txt.position(50, 50);
}

function newText() {
  console.log(input.value());

}
function draw() {
  background(220, 180, 200);

  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
}