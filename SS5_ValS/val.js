/*

SHORT STUDY 5
BROUGHT TO YOU BY VAL S.
Last Modified: (04.04.25)

" Why is my food acting up?? "

Sypnosis:
Soo.. after the midterm I do want to continue the whole vending machine theme, however I
want to brach off from that a bit and focus on this whole scenery but from another angle
testing out the for loops or even creating nested loops.

*/

let MISC = [];

let WHATISMISC = 0;

function preLoad ()
{
  MISC [0] = loadImage ('imgs/choco.png');
  MISC [1] = loadImage ('imgs/snack1.png');
  MISC [2] = loadImage ('imgs/snack2.png');
  MISC [3] = loadImage ('imgs/snack3.png');

}

function setup ()
{

  createCanvas (1000, 1000);
  rectMode (CENTER);
  imageMode (CENTER);
  background (100);
  colorMode (HSL);

}

function draw ()
{

  let gravity = 0;

  let c = color (220, 225, 97);
  //background (220, 225, 97);
  background (c);
  let lightValue = lightness (c);
  noFill();
  stroke (0);
  strokeWeight (10);
  rect (width / 2, height / 2, width / 2, height / 2);
  /* Created a window frame for a scenery */
  
  //noStroke ();
  
  /* make sure mouse is within boundaries of window for inanimate object to fall */
  if (mouseX > 250 && mouseX < 750 && mouseY > 250 && mouseY < 750)
  {
    
  }






  /* MAKE WINDOW FRAMES OPEN OUTWARD */
  strokeWeight (5);
  quad (250, 250, 750, 250, 725, 400, 275, 400); 
  quad (250, 750, 750, 750, 725, 700, 275, 700);

  

}