/*
  MIDTERM WIP by Val
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

  CONTROLS:

*/

let state = "prescene"; /* I'm adding my scenes here */

/* Font Variable(s) */
let myFont;

/* background variables */
let r = 225;
let g = 209;
let b = 97;

/* image variables */
let SPAM;
let tuna;
let bill;
let water;
let hand;
let poison;

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

let ellipseX = 75;
let ellipseY = 225;

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

  myFont = loadFont ('font/monogram.ttf');

  SPAM = loadImage ("img/SPAM.png");
  tuna = loadImage ("img/Tunacan.png");
  bill = loadImage ("img/PNGCipher.png");
  water = loadImage ("img/BottledWater.png");
  hand = loadImage ("img/HandWater.png");
  poison = loadImage ("img/BottledPoison.png");

}

function setup() 
{

  createCanvas (1000, 1000);
  rectMode (CENTER);
  textAlign (CENTER);

}

function draw() 
{

  if (state == "prescene")
  {
    preScene ();
  }
  else if (state == "controls")
  {
    controls ();
  }
  else if (state == "scene")
  {
    scene ();
  }
  else if (state == "scene over")
  {
    sceneOver ();
  }

  print (state);

}

function mousePressed ()
{
  if (state == "prescene")
  {
    state = "controls";
  }
  else if (state == "scene over")
  {
    state = "prescene";
  }
}


function preScene () /* The starting point for the game, so people can click to procees, quite literally what it says. */
{

  background (r, g, b);
  textSize (100);
  textFont (myFont);
  text ('CLICK TO PROCEED!', width/2, height/2, width/2, height/2);

}

function controls () /* Second scene after the starting scene, where it explains the sypnosis and controls. */
{

  /* timer variables */
  let currentTime = 0;
  let timer1 = 10000 ;

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
  text ("C O N T R O L S", width/2, height/2, width/2, height/5);
  noStroke();
  opacity = opacity + fade;

  if (currentTime > timer1)
  {
    textFont (myFont);
    textSize (30);
    text ("P R E S S  S P A C E  T O  C O N T I N U E", width/2, height/2, width/2, height/3);
  }

  print ("currentTime =" + currentTime);

}

function scene ()
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