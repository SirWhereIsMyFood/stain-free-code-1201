/*
  MIDTERM FINAL by Val
  last modified: 3/18/25

  "Buying a snack from the vending machine, but it's dark souls difficulty."

  For the midterm part of this course I really think I should do scenes where something
  happens if you trigger something with a vending machine, since it's more open to possibilties
  as far as a concept goes. I also hope to focus more on the quality of scenes first, rather
  than the quantity of the actions that happens.

  As I said in my other sketches, I'm just playing arround with things here & there.

  Inspired by the game "Make Good Choices".

  SOURCES:
  monogram fonts - https://datagoblin.itch.io/monogram
  fade animation text - https://editor.p5js.org/remarkability/sketches/rtM08miUD
  clcking on objects - The Coding Train "7.6: Clicking on Objects - p5.js Tutorial" URL: https://www.youtube.com/watch?v=DEHsr4XicN8&t=265s
  Session 05 - MTEC 1201

*/

let state = "start"; /* I'm adding my scenes here */

/* Font Variable(s) */
let myFont;

/* background variables */
let r = 225;
let g = 209;
let b = 97;

/* image variables */
let SPAM;
let tuna;
let onigiri;
let bill;
let water;
let gatorade;
let drpepper;
let hand;
let poison;

/* image variables, but for display on the boxes */
let dispFOOD = [];
let dispDRINK = [];

let SPAMx = 475;
let SPAMy = 600;

/* text motion variables */
  let opacity = 0;
  let fade = 1;
  let strokefade = 5

let currentTime;

let vendingxlocation = 500;
let vendingylocation = 575;
let squarexlocation = 425;
let squareylocation = 800;
let buttonx = 305;
let buttony = 300;
let windowx = 200;
let windowy = 200;

let signxlocation = 75;  
let signylocation = 225;

/* grouped ellipse to turn into spawtify */
let spawtifyX = 75;
let spawtifyY = 225;
let lineX
let lineY

let quadFill = [130, 96, 88];
let squareFill = [0, 0, 0, 300];
let vendingFill = [10, 10, 10];
let panelFill = [200, 200, 245];
let signFill = [255, 255, 255, 256];
let buttonFill = [226, 226, 226];
let ellipseFill = [200, 0, 0];
let lineFill = [0, 0, 0];
let slotFill = [200, 200, 245];

function preload()
{

  myFont = loadFont ('fonts/monogram.ttf');

  SPAM = loadImage ("img/SPAM.png");
  tuna = loadImage ("img/Tunacan.png");
  onigiri = loadImage ("img/onigiri.png");
  bill = loadImage ("img/PNGCipher.png");
  water = loadImage ("img/BottledWater.png");
  gatorade = loadImage ("img/gatorade.png");
  drpepper = loadImage ("img/drpepper.png");
  hand = loadImage ("img/HandWater.png");
  poison = loadImage ("img/BottledPoison.png");

  /* displayed images that are movable above
  and images below will be for display only */

  dispFOOD[0] = loadImage ("img/SPAM.png");
  dispFOOD[1] = loadImage ("img/Tunacan.png");
  dispFOOD[2] = loadImage ("img/onigiri.png");
  dispDRINK[0] = loadImage ("img/BottledWater.png");
  dispDRINK[1] = loadImage ("img/gatorade.png");
  dispDRINK[2] = loadImage ("img/drpepper.png");
  dispDRINK[3] = loadImage ("img/question.png");
  
}

function setup() 
{

  createCanvas (1000, 1000);
  rectMode (CENTER);
  textAlign (CENTER);

}

function draw() 
{
  if (state == "start")
  {
    start ();
  }
  else if (state == "controls")
  {
    controls ();
  }
  else if (state == "game")
  {
    game ();
  }
  else if (state == "scene over")
  {
    sceneOver ();
  }

  print (state);

}

function mousePressed ()
{
  if (state == "start")
  {
    state = "controls";
  }
 else if (state == "scene over")
  {
    state = "start";
  }
}

/* The starting point for the game, has a cooldown time to procees. 
Scene leads to explanation of the sypnosis and controls. */
function start ()
{
  background (r, g, b);
  textSize (100);
  textFont (myFont);
  text ('WELCOME, PRESS TO SEE THE OVERVIEW.', width/2, height/2, width/2, height/2);

}

  function controls ()
  {
  /* timer variables */
  let currentTime = 0;
  let timer1 = 8000 ;
  let timer2 = 10000;

  currentTime = millis();

  background (r, g, b);
  textSize (35);
  textFont (myFont);
  fill (opacity);
  text ("You're just trying to get a snack from the vending machine, in the cafeteria. But why is there a funny feeling about this? And why are you here alone? Couldn't you just bring your own food?", 500, 300, width/2, height/2);

  textSize (50);
  stroke(0);
  strokeWeight (strokefade);
  fill (opacity);
  text ("C O N T R O L S", width/2, height/2, width/2, height/4);
  text ("1 - F O O D", width/2 - 150, height/2 + 150, width/2 - 150, height/4 + 150);
  text ("2 - D R I N K S", width/2 + 150, height/2 + 150, width/2 - 150, height/4 + 150);
  noStroke();
  opacity = opacity + fade;

  if (currentTime > timer2)
  {
    text ("P R E S S  S P A C E  T O  P R O C E E D", width/2, height/2 + 400, width/2, height/4 + 200);
  }
  else if (currentTime > timer1)
  {
    if (opacity > 255)
    {
      fade = fade - 0.5;
      strokefade = strokefade - 1;
    }
  }

  print ("currentTime =" + currentTime);
}

function game ()
{

  fill (0);
  ellipse (100, 100, 100, 100);

  /* Rebuilding our vending machine scenario 

  Starting with the floor. */
  push ();
  fill (quadFill);
  stroke (0);
  strokeWeight (5);
  quad (25, 800, 975, 800, 1000, 1000, 0, 1000);
  pop ();

  /* Moving onto the window. */
  noFill ();
  stroke (0);
  strokeWeight (5);
  rect (200, 200, width/5, height/5);

  /* And now the vending machine legend itself. */
  fill (squareFill);
  square (squarexlocation, squareylocation, 75);
  square (squarexlocation + 150, squareylocation, 75);

  fill (vendingFill);
  rect (vendingxlocation, vendingylocation, width/4, height/2.25);
  fill (panelFill);
  rect (vendingxlocation - 15, vendingylocation - 20, width/5.5, height/3);

  /* second vending machine on the right */
  fill (squareFill);
  square (squarexlocation + 350, squareylocation, 75);
  square (squarexlocation + 500, squareylocation, 75);

  fill (vendingFill);
  rect (vendingxlocation + 350, vendingylocation, width/4, height/2.25);
  fill (panelFill)
  rect (vendingxlocation + 335, vendingylocation -20, width/5.5, height/3);

  /* I want to station my products in the machines. */

  image (SPAM, SPAMx, SPAMy, width/10, height/10);

  if (mouseIsPressed===true)
  {
    SPAMx = mouseX;
    SPAMy = mouseY;
  }
}

function keyPressed ()
{
  print ("Key pressed: " + key);
  if (key == " " && state == "controls")
  {
    state = "game";
  }
  
}