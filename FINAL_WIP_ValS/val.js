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

/*
let RColorChange = 106;
  let GColorChange = 60
  let BColorChange = 239;
  let rFade = ['1', '2', '3'];
  let gInvert = ['1', '2', '3'];
  let bFade = ['1', '2', '3'];
  */
 let colorChanges = ['106', '60', '239'];
 let FadeAndInverts = ['2', '2', '2'];

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
  
  windowResized();
  /* fill (106 + colorInvert, 60 - colorFade, 239 + colorInvert); */
  fill (colorChanges);
  textAlign (CENTER, TOP);
  textSize (60);
  textStyle (BOLD);
  textFont ('Verdana');
  text (" Welcome to the Light Show Experience! ", windowWidth/2, windowHeight/10);
  
  /*
  RColorChange = RColorChange + rFade;
  GColorChange = GColorChange - gInvert;
  BColorChange = BColorChange + bFade;
  */
  colorChanges[0] = colorChanges[0] + FadeAndInverts[0];
  colorChanges[1] = colorChanges[1] + FadeAndInverts[1];
  colorChanges[2] = colorChanges[2] + FadeAndInverts[2];

  if (colorChanges[0] >= 255 || colorChanges[0] <= 0)
  {
    if (colorChanges[1] <= 0 || colorChanges[1] >= 255)
    {
      if (colorChanges[2] >= 255 || colorChanges[2] <= 0)
      {
       // FadeAndInverts[0, 1, 2] = -FadeAndInverts[0, 1, 2];
      }
    }
  }

  pop();

  //for (let y = 0)

}

function windowResized ()
{
  resizeCanvas (windowWidth, windowHeight);
  background (27);
}

