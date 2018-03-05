/* global GWindow, GLabel, GOval, GRect, GLine */

function helloWorld() {
  console.log("Hello, world!");
}

const GWIDTH = 500;
const GHEIGHT = 200;

function graphicsHelloWorld() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let msg = GLabel("Hello, world!", 50, 100);
  msg.setFont("36px 'Papyrus'");
  msg.setColor("seagreen");
  gw.add(msg);
}

function blueRectangle() {
  let gw = GWindow(GWIDTH, GHEIGHT);

  let oval = GOval(250, 50, 200, 100);
  oval.setColor("red");
  oval.setFilled(true);
  gw.add(oval);

  let rect = GRect(150, 50, 200, 100);
  rect.setColor("cornflowerblue");
  rect.setFilled(true);
  gw.add(rect);
}

function drawDiagonals() {
    let gw = GWindow(GWIDTH, GHEIGHT);
    gw.add(GLine(0, 0, GWIDTH, GHEIGHT));
    gw.add(GLine(GWIDTH, 0, 0, GHEIGHT));
}

function Target() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let xc = GWIDTH / 2;
  let yc = GHEIGHT / 2;

  gw.add(createFilledCircle(xc, 900, 1000, "cyan"));
  gw.add(createFilledCircle(xc, 325, 300, "red"));
  gw.add(createFilledCircle(xc, 325, 290, "orange"));
  gw.add(createFilledCircle(xc, 325, 280, "yellow"));
  gw.add(createFilledCircle(xc, 325, 270, "green"));
  gw.add(createFilledCircle(xc, 325, 260, "blue"));
  gw.add(createFilledCircle(xc, 325, 250, "indigo"));
  gw.add(createFilledCircle(xc, 325, 240, "violet"));
  gw.add(createFilledCircle(xc, 325, 230, "cyan"));
}

function createFilledCircle(x, y, r, color) {
  let circle = GOval(x - r, y - r, 2 * r, 2 * r);
  circle.setFilled(true);
  circle.setColor(color);
  return circle;
}
