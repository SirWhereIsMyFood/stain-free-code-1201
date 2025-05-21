/*

(REACHING THE CONCLUSION.. FINAL FOR THE FINAL)

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
    - NAMESPACING: https://stackoverflow.com/questions/73399699/switching-between-p2d-and-webgl
    - INSTANCE MODE: https://www.youtube.com/watch?v=Su792jEauZg

*/

let canvas

let webgl_sketch = function(w)
{

    w.message = [" enjoy the time. ", " immerse yourself! ", " take a break, sit back and relax. ", " enjoy the show!", " we are under construction. "];
    w.positionMessage = 0;
    w.myFont;

    w.preload = function()
    {
        w.myFont = w.loadFont ('font/TooMuchInk.ttf'); /* FONT */
    }
w.setup = function()
    {
        w.canvas = w.createCanvas(w.windowWidth, w.windowHeight, w.WEBGL);
        w.canvas.position(0,0);
        w.canvas.hide();
        w.xOff = 0;
        w.yOff = 1;
        w.zOff = 2;

        w.arrayVal = [];

        /* TIMER VAR'S */
        w.ctime = 0;
        w.ptime = 0;
        w.timer = 2000;

        /* STROKE VAR'S */
        w.rs = 0;
        w.gs = 0;
        w.bs = 0;

        /* STROKE WEIGHT VAR */
        w.swsize = 0  

    for (w.i = 4; w.i <= 12; w.i ++)  /* make array values from 4 - 12, (mainly used demo as the refrence) */
    {
        w.arrayVal[w.i - 4] = w.pow (w.i, 2);

       w. print("Sphere rad" + (w.i - 4) + " ] = " + w.arrayVal[w.i - 4]);
    }
    }

    w.draw = function()
    {
        w.background(0);

        /*
        w.noFill ();
        w.stroke (0, 255, 0);
        w.translate (w.noise(w.xOff)*100, w.noise(w.yOff)*w.height*0.01, w.noise(w.zOff)*600)
        w.rotateY (w.millis() / 10000);
        w.sphere (100);

        w.xOff += 0.01;
        w.yOff += 0.01;
        w.zOff += 0.01;
        */

        w.angle = w.frameCount * 0.01; 
        w.ctime = w.millis ();
        w.background (10);
    
        if (w.ctime - w.ptime >= w.timer)
        {
    
           w.ptime = w.ctime
    
            w.rs = w.arrayVal [w.int(w.random(w.arrayVal.length))];
            w.gs = w.arrayVal [w.int(w.random(w.arrayVal.length))];
            w.bs = w.arrayVal [w.int(w.random(w.arrayVal.length))];
    
            w.strokeWeight (w.random(0, 10));
    
            w.print ("current time : " + w.ctime);
            w.print ("ArrayV value is: " + w.arrayVal);

            w.positionMessage = w.int(w.random(0, w.message.length));
    
        }
    
        w.background (w.bs, w.gs, w.rs);
        for (w.i = 0; w.i <= w.windowWidth; w.i++) 
        {
            for (w.y = 0; w.y < 1; w.y++)
        { /* sphere placement, (had to use another nest loop when it comes to translating it, bc it would not work.) */
            w.push();
        w.rotateY (w.angle);
        w.noFill ();
        w.translate (w.i * 70, w.y);
        w.translate (w.noise(w.xOff)*100, w.noise(w.yOff)*w.height*0.01, w.noise(w.zOff)*600)
        w.stroke (w.rs, w.gs, w.bs);
        w.sphere (100);
        w.pop();
        }
    }
        
        /* text location */
        w.push();
        w.fill (255);
        w.textFont (w.myFont);
        w.text (" hey!" + w.message[w.positionMessage], w.width/10, w.height/4); 
        w.pop();

    }
  }

  let three_Dim_sketch = new p5 (webgl_sketch);

  /* p2d sketch */
  let TitleColorChanges = ['106', '60', '200'];
 let FadeAndInverts = ['2', '1', '2'];

 function setup ()
 {

  createCanvas (windowWidth, windowHeight);
  background (27);

 }

 function draw ()
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
  text (" CLICK FOR 2D MODE ", windowWidth / 2.7, windowHeight / 2.5);
  text (" CLICK FOR 3D MODE ", windowWidth / 2.7, windowHeight / 2.5 + 270);

 }

 function windowResized ()
 {

    resizeCanvas (windowWidth, windowHeight);
  background (27);

 }

 function mousePressed ()
 {

    if (mouseX > windowWidth / 2 - 240 && mouseX < windowWidth / 2 + 240 && mouseY > windowHeight / 4 + 270 && mouseY < windowHeight / 4 + 450)
        {
          three_Dim_sketch.canvas.show();
        }
        else if (mouseX > windowWidth / 2 - 240 && mouseX < windowWidth / 2 + 240 && mouseY > windowHeight / 4 + 15 && mouseY < windowHeight / 4 + 200)
        {
          draw();
          fill (255);
          textSize (20);
          textStyle (BOLDITALIC);
          text (" currently under construction ", windowWidth / 1.5, windowHeight / 2.5);
        } 

 }
 