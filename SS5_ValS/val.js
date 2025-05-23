/*

SHORT STUDY 5
BROUGHT TO YOU BY VAL S.
Last Modified: (04.04.25)

" Why is my food acting up?? "

Sypnosis:
Soo.. after the midterm I do want to continue the whole vending machine theme, however I
want to brach off from that a bit and focus on this whole scenery but from another angle
testing out the for loops or even creating nested loops.

Credits:
Thanks to this p5 web editor sketch for being of use: https://editor.p5js.org/xinxin/sketches/nC-CYIRGt
*/

let MISC = [];

let gravity = 400;

let c1 = 220;
let c2 = 225;
let c3 = 97;

/* let WHATISMISC = 0; */

function preload ()
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

  /* let x = random(250, 750); */
  let imgs = 50;

  let c = color (c1, c2, c3);
  background (c);
  /* background (220, 225, 97); */
  noFill();
  stroke (0);
  strokeWeight (10);
  rect (width / 2, height / 2, width / 2, height / 2);
  /* Created a window frame for a scenery */
  
  /* noStroke (); */
  
  /* make sure mouse is within boundaries of window for inanimate object to fall */
  for (let i = 0; i < MISC.length; i ++)
  /* if (mouseX > 250 && mouseX < 750 && mouseY > 400 && mouseY < 700) */
  {
    /* for (let i = 400; i <= 725; i += imgs) */
      if (mouseX > 250 && mouseX < 750 && mouseY > 400 && mouseY < 700)
    {
     /* WHATISMISC = int(random(MISC.length)) */
      image (MISC[i], i * 250, gravity, 100, 100);
      /* fill (random(100, 200), 220, 97); */
      /* ellipse (x, gravity, imgs, imgs); */
      for (let i = 350; i <= 400; i += imgs)
      {
        fill (random(100, 200), 220, 97);
      ellipse (i, gravity, imgs, imgs);
      for (let i = 600; i <= 650; i += imgs)
        {
          fill (150, random(100, 115), random(0, 15));
        ellipse (i, gravity, imgs, imgs);
          
        }
      }
      strokeWeight (5);
    quad (250, 250, 750, 250, 725, 400, 275, 400); 
    quad (250, 750, 750, 750, 725, 700, 275, 700);
      
      gravity ++;
      c1 += 2;
      c2 += 2;
      c3 += 2;

      
    if (gravity >= 725)
    {
      gravity = 400
    } 
    if (c1 >= 255)
    {
      c1 = 220;
    }
    if (c2 >= 255)
    {
      c2 = 225;
    }
    if (c3 >= 255)
    {
      c3 = 97;
    }
    }
    else
    {
      c1 = 220;
      c2 = 225;
      c3 = 97;
    }
    
      
    /*
    gravity += random(1, 10);

    if (gravity >= 725)
    {
      gravity =- imgs
    }
    */
  
  }

  print ("gravity = : " + gravity);
  print ("c1 = : " + c1);
  print ("c2 = : " + c2);
  print ("c3 = : " + c3);


 /* b ++ || random (20, 100); */
 /* g ++ || random (195, 230); */


  /* MAKE WINDOW FRAMES OPEN OUTWARD */
  strokeWeight (5);
  quad (250, 250, 750, 250, 725, 400, 275, 400); 
  quad (250, 750, 750, 750, 725, 700, 275, 700);

  

}