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

let vendingxlocation = 190;
let vendingylocation = 430;
let squarexlocation = 200;
let squareylocation = 425;

let quadC = ['130', '96', '88'];

function setup()
{

  createCanvas (500, 500); // SETUP CANVAS. \\
  rectMode (CENTER);
  background (220);

}

function draw ()
{

  background (r, g, b);  

  fill (quadC);
  quad (0, 450, 500, 450, 501, 500, 0, 500);

  fill (0, 0, 0, 300);
  square (squarexlocation, squareylocation, 50);
  square (squarexlocation + 75, squareylocation, 50);

  fill (10, 10, 10);
  rect ()

}
