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

SOURCES & CREDITS:

*/

let state = "titlescreen"; /* This needs a title screen to take to a controls and start section */
let buttons;

 let TitleColorChanges = ['106', '60', '200'];
 let FadeAndInverts = ['2', '1', '2'];

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
  else if (state == "controls")
  {
    controls();
  }
  else if (state == "boot")
  {
    boot();
  }
  else if (state == "2D")
  {
    TwoDimensional();
  }
  else if (state == "3D")
  {
    ThreeDimensional();
  }
  else if (state == "show over")
  {
    showOver();
  }
}

function titleScreen ()
{
  
  background (27);
  push();

  windowResized();
  colorMode (HSB);
  fill (TitleColorChanges);
  textAlign (CENTER, TOP);
  textSize (60);
  textStyle (BOLD);
  textFont ('Verdana');
  text (" Welcome to a 'Light Show' Experience! ", windowWidth / 2, windowHeight / 10);
  
  TitleColorChanges[0] = TitleColorChanges[0] - FadeAndInverts[0];
  TitleColorChanges[1] = TitleColorChanges[1] - FadeAndInverts[1];
  TitleColorChanges[2] = TitleColorChanges[2] - FadeAndInverts[2];

  if (TitleColorChanges[0] >= 255 || TitleColorChanges[0] <= 0)
  {
    FadeAndInverts[0] = -FadeAndInverts[0];
    if (TitleColorChanges[1] <= 0 || TitleColorChanges[1] >= 255)
    {
      FadeAndInverts[1] = -FadeAndInverts[1];
      if (TitleColorChanges[2] >= 255 || TitleColorChanges[2] <= 0)
      {
        FadeAndInverts[2] = -FadeAndInverts[2];
      }
    }
  }
  print ("the value is: " + TitleColorChanges);
  pop();

  for (let y = windowHeight / 2.5; y < windowHeight / 1.25; y += 250)
  {
    noFill();
    rectMode (CENTER);
    rect (windowWidth / 2, y, windowWidth / 3, windowHeight / 4);
  }

  push();
  fill (255);
  textSize (35);
  textStyle (ITALIC);
  text (" Start the show ", windowWidth / 2.5, windowHeight / 2.5);
  text (" Controls & Interactions ", windowWidth / 2.7, windowHeight / 2.5 + 270);
  pop();
}

function controls ()
{
  background (27);

  textAlign (CENTER, TOP);
}

function boot ()
{
  background (27);
}

function windowResized ()
{
  resizeCanvas (windowWidth, windowHeight);
  background (27);
}

function mousePressed ()
{
  if (state == "titlescreen")
  {
    if (mouseX > windowWidth / 2 - 240 && mouseX < windowWidth / 2 + 240 && mouseY > windowHeight / 4 + 270 && mouseY < windowHeight / 4 + 450)
    {
      state = "controls"
    }
    else if (mouseX > windowWidth / 2 - 240 && mouseX < windowWidth / 2 + 240 && mouseY > windowHeight / 4 + 15 && mouseY < windowHeight / 4 + 200)
    {
      state = "boot"
    }
  }
}

