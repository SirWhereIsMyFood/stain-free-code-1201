/*

SS4 - brought to you by Val
last modified: 3/11/25

"Aw shmucks, I forgot to eat something.. eh lets see what the vending machine has."

Paraphrasing from SS3 but same theme but a little switch with some keys being
disabled, but for FOOD!

I'll see what comes to mind along the way cause I'm honestly just playing around
with this, once again.

CONTROLS:

MOUSE BUTTON / TRACKPAD (PRESSED)
LEFT ARROW to move ellipse

But also hover your mouse around to see some other thing(s).


*/

let r = 225;
let g = 209;
let b = 97;
        // declaring variables. \\
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

let quadFill = ['130', '96', '88'];
let squareFill = ['0', '0', '0', '300'];
let vendingFill = ['10', '10', '10'];
let panelFill = ['200', '200', '245'];
let signFill = ['255', '255', '255', '256'];
let buttonFill = [226, 226, 226];
let ellipseFill = ['200', '0', '0'];
let lineFill = ['0', '0', '0'];
let slotFill = ['200', '200', '245'];

// ALL FROM SS3 \\

let spam;
let foodX = 240;
let foodY = 400;

let currentTime = 0;
let timer1 = 3000; 
let timer2 = 6000;
let timer3 = 9000;
let timer4 = 11000;

let opacity = 0;
let fade = 1;

function preload ()
{

  spam = loadImage ("img/SPAM.PNg");

}

function setup()
{

  createCanvas (500, 500); // SETUP CANVAS. \\
  rectMode (CENTER);
  imageMode (CENTER);
  textAlign (CENTER);
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
  rect (vendingxlocation, vendingylocation, width/4, height/3);

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

  // NEW: ADDING A SLOT FOR WHERE YOU RETRIEVE YOUR ITEMS. \\

  push();
  fill (slotFill);
  translate (0, 125);
  rect (vendingxlocation, vendingylocation, width/4, height/16)

  pop();

  currentTime = millis();

  // image (spam, 200, 200, width/5, height/5); \\

  if (mouseX <= 325)
  {
  buttonFill[0] = random(20, 170);
  buttonFill[1] = random(15, 190);
  buttonFill[2] = random(20, 166);
  }

  if (keyIsDown(LEFT_ARROW))
  {
    ellipseX--;
  }

  if (ellipseX < 0)
  {

    lineX - 50 * 2;

    fill (255, 244, 0);
    stroke (0);
    strokeWeight (5);
    triangle (40, 250, 110, 250, 75, 200);

    noStroke();
    let eye = [255];
    fill (eye);
    ellipse (75, 225, 10, 30);
    
    let pupil = [10];
    fill (pupil);
    ellipse (75, 225, 5, 15);

    stroke (0);
    strokeWeight(3);
    line (65, 200, 85, 200);
    square (75, 195, 10);
    noStroke();
    print ("there is no going back now.");

    if (currentTime > timer4)
    {
      print ("11 SECS PASSED, YUMMY TIME.");
      image (spam, foodX, foodY, width/10, height/10);
    }

    else if (currentTime > timer3)
    {

      print ("9 SECS PASSED.");
      text ("BUT I GUESS YOU CAN SNACK ON MY SPAM.", 100, 100, width/5, height/5);
      image (spam, 240, 400, width/10, height/10);
    }

    else if (currentTime > timer2)
    {

      print ("6 SECS PASSED.");
      text ("THIS IS MY THRONE.", 100, 100, width/5, height/5);
      image (spam, 250, 250, width/10, height/10);
    }

    else if (currentTime > timer1)
    {

      text ("HEY THIS AIN'T JAPAN.", 100, 100, width/5, height/5);
      print("3 SECS PASSED.");
    }

    print ("currentTime = " + currentTime);
  }

  if (mouseIsPressed===true)
  {
    foodX = mouseX;
    foodY = mouseY;
  }


}

