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


function preScene () /* The starting point for the game, so people can click to procees, quite literally what it says. */
{

  background (r, g, b);
  textSize (100);
  textFont (myFont);
  text ('CLICK TO PROCEED!', width/2, height/2, width/2, height/2);

}

function controls () /* Second scene after the starting scene, where it explains the sypnosis and controls. */
{

  background (r, g, b);
  textSize (35);
  textFont (myFont);
  text ("You're just trying to get a snack from the vending machine, in the cafeteria. But why is there a funny feeling about this? And why are you here alone? Couldn't you just bring your own food?", 500, 300, width/2, height/2);

  textSize (50);
  stroke(0);
  strokeWeight (5);
  text ("C O N T R O L S", width/2, height/2, width/2, height/4);
  noStroke();
}