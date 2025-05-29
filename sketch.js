let x;
let y;

function setup() {
  createCanvas(1000,1000);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(138,43,226);
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  //distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);
  distancia = dist(mouseX,mouseY,x,y);
  circle(mouseX, mouseY, distancia);
  fill(0,0,255)
  //circle(x, y, 10);
  //console.log(distancia);

  if (distancia < 3) {
    text("Achouuuu!", 200, 200);
    noLoop();
  }
}


  