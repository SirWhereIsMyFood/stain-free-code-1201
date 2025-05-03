/*

FINAL FIRST WORK IN PROGRESS
" Just Enjoy The SHow. "
By Val S.
Date Started: (05/02/25)

Creator Comment(s):
Going into this final, I feel a bit anxious since I want to do levels of implementation of coding,
all for a simple light show, however I want to take it a step first and not add everything.
Although I said 'laser light show' in the proposal, I'm not talking solely about lasers, but rather about
LED's and color mixing with palletes and schemes, as well as, for additional and advanced purposes,
adding audio and sound effects to it.

Below I'm adding controls, although the intention may not be as fully interactable, I'll do my best
creating a visual experience of my own, and it may be a bit whacky at first or odd, but just bare with
me as I try to find the right idea/themes along the way.

And yes, I have moved on from the vending machine, I think I wanna do something more creative that I
haven't really done yet.

CONTROLS:

*/

let state = "titlescreen"; /* This needs a title screen to take to a controls and start section */
let buttons;

function setup ()
{

  createCanvas (windowWidth, windowHeight);
  background (27);

}

function draw ()
{

  if (state == "titlescreen")
  {
    titleScreen();
  }

}

function titleScreen ()
{

  background (27);

  push();
  fill (106, 60, 239);
  textAlign (CENTER, TOP);
  textSize (90);
  textStyle (BOLD);
  textFont ('Verdana');
  text (" Welcome to the Light Show! ", width/2, height/10);
  pop();

}

