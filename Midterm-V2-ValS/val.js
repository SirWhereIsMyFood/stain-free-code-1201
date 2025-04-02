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
let reset = false;
let venddrink = false; /* t/f statements */
let vendfood = false;

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
let endTime = 60000;

let vendingxlocation = 500;
let vendingylocation = 575;
let squarexlocation = 425;
let squareylocation = 800;
let buttonx = 305;
let buttony = 300;
let windowx = 200;
let windowy = 200;

/* grouped ellipse to turn into "spawtify" */
let spawtifyX = 100;
let spawtifyY = 100;
let sz = 100;
let lineX = 100;
let lineY = 100;

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
  //bill = loadImage ("img/PNGCipher.png");
  drink[0] = loadImage ("img/BottledWater.png");
  drink[1] = loadImage ("img/gatorade.png");
  drink[2] = loadImage ("img/drpepper.png");
  //hand = loadImage ("img/HandWater.png");
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
  currentTime = millis();
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
  resetTime = millis();
  
  if (key == "p" || key == "P")
  {
    let timer1 = 2000;
    let timer2 = 15000;
    let currentTime = 0;
    currentTime = millis();

    background (r, g, b);
    
    if (currentTime > timer2)
      {
        textSize (45);
        text ("P R E S S  S P A C E  T O  C O N T I N U E", width/10 + 400, height/1.25 + 950, width/10 + 850, height/1.25 + 950);

        textSize (35);
      textFont (myFont);
      fill (opacity);
      //text ("You're just trying to get a snack from the vending machine, in the cafeteria. But why is there a funny feeling about this? And why are you here alone? Couldn't you just bring your own food?", 500, 300, width/2, height/2);
      text ("You're coming home from a late night drive due to a family emergency.. and.. kind of sleepy.. and the tank is almost empty.. So you exit the inerstate and pull over to a resting point with a vending machine, but stil hungry with the next town being miles away. What can you do though? ", 500, 275, width/2, height/2);

      textSize (50);
      stroke(0);
      strokeWeight (strokefade);
      fill (opacity);
      text ("C O N T R O L S", width/2, height/2, width/2, height/4);
      text ("1 - F O O D", width/2 - 150, height/2 + 150, width/2 - 150, height/4 + 150);
      text (" (Pressing 1 on your keyboard activates the randomizer in the food display box) ", width/2 - 200, height/2 + 175, width/2 - 150, height/4 + 100);
      text ("2 - D R I N K S", width/2 + 150, height/2 + 150, width/2 - 150, height/4 + 150);
      text (" (Pressing 2 on your keyboard activates the randomizer in the drink display box) ", width/2 + 200, height/2 + 175, width/2 -150, height/4 + 100);
      noStroke();
      opacity = opacity + fade;
  
        if (opacity > 255)
        {
          fade = fade - 0.5;
          strokefade = strokefade - 1;
        }
        print ("currentTime =" + currentTime);

      }
      else if (currentTime > timer1)
      {
      textSize (35);
      textFont (myFont);
      fill (opacity);
      //text ("You're just trying to get a snack from the vending machine, in the cafeteria. But why is there a funny feeling about this? And why are you here alone? Couldn't you just bring your own food?", 500, 300, width/2, height/2);
      text ("You're coming home from a late night drive due to a family emergency.. and.. kind of sleepy.. and the tank is almost empty.. So you exit the inerstate and pull over to a resting point with a vending machine, but stil hungry with the next town being miles away. What can you do though? ", 500, 275, width/2, height/2);

      textSize (50);
      stroke(0);
      strokeWeight (strokefade);
      fill (opacity);
      text ("C O N T R O L S", width/2, height/2, width/2, height/4);
      text ("1 - F O O D", width/2 - 150, height/2 + 150, width/2 - 150, height/4 + 150);
      text (" (Pressing 1 on your keyboard activates the randomizer in the food display box) ", width/2 - 200, height/2 + 175, width/2 - 150, height/4 + 100);
      text ("2 - D R I N K S", width/2 + 150, height/2 + 150, width/2 - 150, height/4 + 150);
      text (" (Pressing 2 on your keyboard activates the randomizer in the drink display box) ", width/2 + 200, height/2 + 175, width/2 -150, height/4 + 100);
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

  text ("R TO RESTART", 200, 950, width/5, height/5);

  image (dispFOOD[whichFOOD], 200, 200, width/6, height/6);
  image (dispDRINK[whichDRINK], 800, 200, width/6, height/6);

  if (dist(spawtifyX, spawtifyY, mouseX, mouseY) < sz / 2 || dist(spawtifyX + 800, spawtifyY, mouseX, mouseY) < sz / 2)
  {
    
    fill (27, 229, 23);
    strokeWeight (2);
    stroke (100, random(200), 100);
    
  }

  ellipse (spawtifyX, spawtifyY, sz, sz);
  ellipse (spawtifyX + 800, spawtifyY, sz, sz);

  /* I want to station my products in the machines. */

  if(vendfood)
  {
    vendfood = false;
  if (key == "f" || key == "F")
  {

    image(dispFOOD[whatFOOD], mouseX, mouseY, width/5, height/6);
  }
}

  if(venddrink)
  {
    venddrink = false;

  }
}

function sceneOver ()
{
  if (currentTime >= endTime)
  {
    resetMillis();
  }
  textFont (myFont);
  textSize (45);
  text ("Whoa, that feeling is a little bubbly.. you passeed on the side of the parking lot. Click to play the experience again.", width/2, height/2, width/2, height/2);
}

function keyPressed ()
{

  if (key == " " && state == "main menu")
    {
      clear();
      state = "game";
    }

  if (key == "1")
  {
    whichFOOD = int(random(dispFOOD.length));
  }

  if (key == "2")
  {
    whichDRINK = int(random(dispDRINK.length));
  }

  if (key == "r" || key == "R")
  {
    state = "main menu";
  }
        

}