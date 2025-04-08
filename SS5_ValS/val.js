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

  //let x = random(250, 750);
  let gravity = 400;
  let imgs = 25;

  let c = color (220, 225, 97);
  background (c);
  //background (220, 225, 97);
  noFill();
  stroke (0);
  strokeWeight (10);
  rect (width / 2, height / 2, width / 2, height / 2);
  /* Created a window frame for a scenery */
  
  //noStroke ();
  
  /* make sure mouse is within boundaries of window for inanimate object to fall */
  for (let i = 0; i < MISC.length; i ++)
  //if (mouseX > 250 && mouseX < 750 && mouseY > 400 && mouseY < 700)
  {
    //for (let i = 400; i <= 725; i += imgs)
      if (mouseX > 250 && mouseX < 750 && mouseY > 400 && mouseY < 700)
    {
     // WHATISMISC = int(random(MISC.length))
      image (MISC[i], i * 50, 400, width/4, height/4);
      //fill (random(100, 200), 220, 97);
      //ellipse (x, gravity, imgs, imgs);

      strokeWeight (5);
    quad (250, 250, 750, 250, 725, 400, 275, 400); 
    quad (250, 750, 750, 750, 725, 700, 275, 700);
      /*
      gravity += random(0.1, 1);

    if (gravity >= 725)
    {
      gravity =- imgs
    }
    }
      */
    /*
    gravity += random(1, 10);

    if (gravity >= 725)
    {
      gravity =- imgs
    }
    */
  
  }

  print ("gravity = : " + gravity);


 // b ++ || random (20, 100);
 // g ++ || random (195, 230);


  /* MAKE WINDOW FRAMES OPEN OUTWARD */
  strokeWeight (5);
  quad (250, 250, 750, 250, 725, 400, 275, 400); 
  quad (250, 750, 750, 750, 725, 700, 275, 700);

  

}