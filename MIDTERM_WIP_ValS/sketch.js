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

  CONTROLS:

*/

let state = "prescene"; /* I'm adding my scenes here */

/* Font Variable(s) */
let myFont;

let r = 225;
let g = 209;
let b = 97;

function preload()
{

  myFont = loadFont ('font/monogram.ttf');

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


function preScene ()
{

  background (r, g, b);
  textSize (100);
  textFont (myFont);
  text ('CLICK TO PROCEED!', width/2, height/2, width/2, height/2);

}

function controls ()
{

  background (r, g, b);
  textSize (50);
  textFont (myFont);
  text ("you're walking", width/2, height/2, width/2, height/2);

}