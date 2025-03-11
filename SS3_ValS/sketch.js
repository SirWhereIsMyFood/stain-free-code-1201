/*

SS3 - brought to you by Val
last modified: 3/11/25

"Are you tampering with the vending machine?"

I think it's time to change the scenery a little bit and go a little more zoomed in on
the vending machine to add conditional statements and a random function to appear.

I'll see what comes to mind along the way cause I'm honestly just playing around
with this.

CONTROLS:

*/

let r = 225;
let g = 209;
let b = 97;
        // declaring variables. \\
let r2;
let b2;
let g2;

let vendingxlocation = 235; // 400 \\
let vendingylocation = 275; // 430 \\
let squarexlocation = 200;
let squareylocation = 425;
let buttonx = 305;
let buttony = 300;

let signxlocation = 75;  
let signylocation = 225;

let ellipseX = 75;
let ellipseY = 225;

let lineX = 60;
let lineY = 225;

let xMove = 0;
let yMove = 0;

let quadFill = ['130', '96', '88'];
let squareFill = ['0', '0', '0', '300'];
let vendingFill = ['10', '10', '10'];
let panelFill = ['200', '200', '245'];
let signFill = ['255', '255', '255', '256'];
let buttonFill = ['226', '226', '226'];
let ellipseFill = ['200', '0', '0'];
let lineFill = ['0', '0', '0'];

function setup()
{

  createCanvas (500, 500); // SETUP CANVAS. \\
  rectMode (CENTER);
  background (220);

}

function draw ()
{

  background (r, g, b);  

  fill (quadFill);
  quad (0, 450, 500, 450, 501, 500, 0, 500);

  // Vending Machine Build. \\

  fill (squareFill);
  square (squarexlocation, squareylocation, 50);
  square (squarexlocation + 75, squareylocation, 50);

  fill (vendingFill);
  rect (vendingxlocation, vendingylocation, width/3, height/1.5);

  fill (panelFill);
  rect (vendingxlocation, vendingylocation, width/4, height/1.75);

  fill (buttonFill);
  ellipse (buttonx, buttony, 5, 5);
  ellipse (buttonx + 5, buttony, 5, 5);
  ellipse (buttonx, buttony + 5, 5, 5);
  ellipse (buttonx + 5, buttony + 5, 5, 5);

  // Below I'm adding a sign on the left of the machine. \\

  fill (signFill);

  rect (signxlocation, signylocation, width/6, height/6);

  fill (ellipseFill);
  ellipse (ellipseX, ellipseY, width/10, height/10);

  fill (lineFill);
  stroke (0);
  line (lineX, lineY, lineX * 1.5, lineY);
}

function mousePressed ()
{


}

function keyPressed ()
{
  


}