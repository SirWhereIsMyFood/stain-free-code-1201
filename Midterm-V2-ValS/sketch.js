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

let state = "mainMenu"; /* Here is where I'm throwing my scenes in */
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