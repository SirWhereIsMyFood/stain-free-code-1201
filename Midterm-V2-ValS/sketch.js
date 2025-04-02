/*
MIDTERM Iteration by Val
last modified 04/01/24 (april fools)

" Buying a snack from the vending machine, but it's kind of a whacky adventure. "

For my final iteration, I didn't just copy and pasted then added changes to it, but I'm just
stating what I really wanted to go for. At least in here I did wanted to fix the erros
that wasn't functioning the way I would want it to, and then see what I can really add from
there + feedback from peers on last weeks review.

As I said in all sketches, I'm really just playing around with things here and there

SOURCES:
  monogram fonts - https://datagoblin.itch.io/monogram
  fade animation text - https://editor.p5js.org/remarkability/sketches/rtM08miUD
  clcking on objects - The Coding Train "7.6: Clicking on Objects - p5.js Tutorial" URL: https://www.youtube.com/watch?v=DEHsr4XicN8&t=265s
  Session 05 - MTEC 1201
*/

let state = "main menu"; /* Here is where I'm throwing my scenes in */
let venddrink = 0; /* t/f statements */
let vendfood = 0;

/* Font variables */
let myFont;

/* image variables */
let food = [];
let drink = [];

/* create an image variable but for displays only on the boxes */
let dispFOOD = []
let whichFOOD = 0;
let dispDRINK = []
let whichDRINK = 0;

/* background color variables */
let r = 225;
let g = 209;
let b = 97;

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

/* grouped ellipse to turn into "spawtify" */
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

  myFont = loadFont ('font/monogram.ttf');

  food[0] = loadImage ("img/SPAM.png");
  food[1] = loadImage ("img/Tunacan.png");
  food[2] = loadImage ("img/onigiri.png");
  bill = loadImage ("img/PNGCipher.png");
  drink[0] = loadImage ("img/BottledWater.png");
  drink[1] = loadImage ("img/gatorade.png");
  drink[2] = loadImage ("img/drpepper.png");
  hand = loadImage ("img/HandWater.png");
  drink[3] = loadImage ("img/BottledPoison.png");

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
  imageMode (CENTER);

}

function draw() 
{
  if (state == "main menu")
  {
    mainMenu ();
    print (state);
  }
  else if (state == "game")
  {
    game ();
    print (state);
  }
  else if (state == "scene over")
  {
    sceneOver ();
    print (state);
  } 

  print (state);

}

/* The starting point for the game, has a cooldown time to procees. 
Scene leads to explanation of the sypnosis and controls. */
function mainMenu()
{
background (r, g, b);
  textSize (100);
  textFont (myFont);
  text ('WELCOME, PRESS P TO PROCEED.', width/2, height/2, width/2, height/2);
  
    /*
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
    */
    
  if (key == "p" || key == "P")
  {
    let currentTime = 0;
    let timer1 = 5000;
    let timer2 = 20000;
  
    currentTime = millis();
    
    background (r, g, b);
    
    if (currentTime > timer2)
      {
        text ("P R E S S  S P A C E  T O  P R O C E E D", width/2, height/2 + 400, width/2, height/4 + 200);
      }
      else if (currentTime > timer1)
      {
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
  
        if (opacity > 255)
        {
          fade = fade - 0.5;
          strokefade = strokefade - 1;
        }
        print ("currentTime =" + currentTime);
      }
  }
}

function game ()
{
  background (r, g, b);

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
  rect (800, 200, width/5, height/5);

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
  rect (vendingxlocation + 335, vendingylocation -20, width/5.5, height/3);4

  /* add 1 & 2 as a reminder for controls */
  textFont(myFont);
  text ("1", 200, 150, width/5, height/5);
  text ("2", 800, 150, width/5, height/5);

  text ("F", 200, 450, width/5, height/5);
  text ("D", 800, 450, width/5, height/5);

  text ("R TO RETURN BACK", 200, 950, width/5, height/5);

  image (dispFOOD[whatFOOD], 200, 200, width/6, height/6);
  image (dispDRINK[whatDRINK], 800, 200, width/6, height/6);

  fill (0);
  ellipse (100, 100, 100, 100);

  /* I want to station my products in the machines. */

  if(vendfood)
  {
    vendfood = false;
  if (mouseIsPressed===true)
  {

    image(dispFOOD[whatFOOD], mouseX, mouseY, width/5, height/6);
  }
}
}

function keyPressed ()
{

}