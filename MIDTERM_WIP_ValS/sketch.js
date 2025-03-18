/*
  MIDTERM WIP by Val
  last modified: 3/18/25

  "Buying a snack from the vending machine, but it's dark souls difficulty."

  For the midterm part of this course I really think I should do scenes where something
  happens if you trigger something with a vending machine, since it's more open to possibilties
  as far as a concept goes. I also hope to focus more on the quality of scenes first, rather
  than the quantity of the actions that happens.

  As I said in my other sketches, I'm just playing arround with things here & there.

  SOURCES:
  monogram fonts - https://datagoblin.itch.io/monogram

  CONTROLS:

*/

//let state = preScene; /* I'm adding my scenes here */

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
  background (r, g, b);
  rectMode (CENTER);
  textAlign (CENTER);
  textSize (10);

}

function draw() 
{

  fill (100, 0, 0);
  textFont (myFont);
  text ('test', width/2, height/2, width/3, height/3);

}