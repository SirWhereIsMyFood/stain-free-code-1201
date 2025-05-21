/*

(CONTINUATION.. SECOND WIP FOR THE FINAL)

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
  Wave Patterns
    - 2D: https://editor.p5js.org/pattvira/sketches/CJMubeF9M
    - 3D: https://editor.p5js.org/pattvira/sketches/MrusyEiBe

*/

let state = "titlescreen"; /* This needs a title screen to take to a controls and start section */
let options;

/* ARRAYS */
let arrayVal = [];

let message = [" enjoy the time. ", " immerse yourself! ", " take a break, sit back and relax. ", " enjoy the show!"];
let positionMessage = 0;

/* LOAD FONT */
let myFont; /* must use a font in WEBGL, the standard 2D p5 will not work. */

/* TIMER VAR'S */
let ctime = 0;
let ptime = 0;
let timer = 2000;

/* STROKE VAR'S */
let rs = 0;
let gs = 0;
let bs = 0;

/* STROKE WEIGHT VAR */
let swsize = 0

let graphix;


 let TitleColorChanges = ['106', '60', '200'];
 let FadeAndInverts = ['2', '1', '2'];

 function preload ()
{

    myFont = loadFont ('font/TooMuchInk.ttf'); /* FONT */

}

function setup ()
{

  createCanvas (windowWidth, windowHeight, WEBGL);
  background (27);

  for (let i = 4; i <= 12; i ++)  /* make array values from 4 - 12, (mainly used demo as the refrence) */
    {
        arrayVal[i - 4] = pow (i, 2);

        print("Sphere rad" + (i - 4) + " ] = " + arrayVal[i - 4]);
    }
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
  else if (state == "startup")
  {
    startUp();
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

  
  fill (255);
  textSize (35);
  textStyle (ITALIC);
  text (" Start the show ", windowWidth / 2.5, windowHeight / 2.5);
  text (" Controls & Interactions ", windowWidth / 2.7, windowHeight / 2.5 + 270);
  
}

function controls ()
{
  background (27);

  push();
  fill (255);
  textAlign (CENTER, TOP);
  textSize (100);
  textStyle (BOLDITALIC);
  text (" Controls And Interactions ", windowWidth / 2, windowHeight / 10);

  text (" P ", windowWidth / 15, windowHeight / 3 + 200, windowWidth / 10, windowHeight / 3 + 200);

  textSize (50);
  textStyle (ITALIC);
  text (" - Print image of current display ", windowWidth / 15 + 250, windowHeight / 3 + 200, windowWidth / 10 + 350, windowHeight / 3 + 200);
  pop();

  push();
  rectMode(CENTER, BOTTOM);
  noFill ();
  rect (windowWidth / 2, windowHeight / 1.25, windowWidth / 4, windowHeight / 4);
  textAlign (CENTER, BOTTOM);
  fill (255);
  text (" Go back ", windowWidth / 2, windowHeight / 1.25, windowWidth / 4 - 10, windowHeight / 4 - 100);
  pop();

}

function startUp ()
{
  background (27);

  options = createSelect ();
  options.position (windowWidth / 2.1, windowHeight / 2.25);
  options.option (' ');
  options.option ('2D');
  options.option ('3D');

  options.selected(' ');

  push();
  textAlign (CENTER, TOP);
  textSize (100);
  textStyle (BOLDITALIC);
  text (" Select your mode ", windowWidth / 2, windowHeight / 10);
  pop();

  if (options.value() == "3D")
  {
    ThreeDimensional();
  }
}

function ThreeDimensional ()
{
  
  background (27);

  let angle = frameCount * 0.01; 
    ctime = millis ();

    if (ctime - ptime >= timer)
    {

        ptime = ctime

        rs = arrayVal [int(random(arrayVal.length))];
        gs = arrayVal [int(random(arrayVal.length))];
        bs = arrayVal [int(random(arrayVal.length))];

        strokeWeight (random(0, 10));

        print ("current time : " + ctime);
        print ("ArrayV value is: " + arrayVal);

        positionMessage = int(random(0, message.length));
    }

    background (bs, gs, rs);
    for (let i = 0; i <= windowWidth; i++) 
    {
        for (let y = 0; y < 1; y++)
    { /* sphere placement, (had to use another nest loop when it comes to translating it, bc it would not work.) */
        push();
    rotateY (angle);
    noFill ();
    translate (i * 70, y);
    stroke (rs, gs, bs);
    sphere (100);
    pop();
    }
    
}
        
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
      state = "startup"
    }
  }
  else if (state == "controls")
    if(mouseX > windowWidth / 2 - 185 && mouseX < windowWidth / 2 + 185 && mouseY > windowHeight / 1.25 - 90 && mouseY < windowHeight / 1.25 + 90)
    {
      state = "titlescreen"
    }
 
}

function keyPressed ()
{
  if (key === "3")
  {
    state = "3D"
  }
  if (key === "p" || key === "P" && state == "3D")
  {
    saveCanvas ('Highlight.png');
  }
}
