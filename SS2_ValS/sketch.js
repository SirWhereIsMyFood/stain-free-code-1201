/* 

SS2_ValS
By Val
3/4/25 - last modified

"We're closed for the night, please come back tomorrow."

Personal Note: Going along with the thought from last weeks class and feedback, I think I'll continue
these types of minimalist sketches that pique interest.

For this sketch I basically reused my first sketch but added components to it that make it more interactble.

I was thinking of what to throw in for this sketch.
Maybe a night setting where the whole scenery kind of changes if you hit the mouse click/pressed.

CONTROLS:

left mouse/trackpad pressed - Tune into daytime, or sunset/sunrise
B - Tune into night mode

*/

let r = 225
let g = 209
let b = 97

let spotifyXLocation = 100;
let line1ylocation = 140;
let line2ylocation = 150;
let line3ylocation = 160;

let squareylocation = 400;
let rectylocation = 3
let vendingylocation = 345;

let expand = 350;


function setup()
{

  //SETUP CANVAS SIZE.\\
  createCanvas (700, 700);
  rectMode (CENTER); 
}

function draw() 
{
  /*
  let r = 225;
  let g = 209;
  let b = 97;
  */

  //CREATE BG WITH R, G, B VALUES (0-255).. used adobe color.\\
  background(r, g, b); // replaced initial values with variables, declared value on variables. \\
  
  // this time around I'm gonna start off with a field, using quad. \\
  // and fill this as well. \\
  fill (130, 96, 88);
  quad (125, 400, 575, 400, 700, 700, 0, 700);

  // disable fill for other designs. \\
  noFill();

  // Add somethng behind the vending machine, like a cactus so it's visible when it moves. \\
  stroke (61, 192, 38);
  strokeWeight (40);
  line (350, 360, 350, 315);
  strokeWeight (20)
  arc (350, 340, width/10, height/10, 0, QUARTER_PI);
  noStroke();

  // Here I want to add lines to expand the cactus lines. \\
  stroke (0, 0, 0);
  strokeWeight (5);
  line (expand, 310, 355, 310);
  line (expand, 325, 355, 325);
  line (expand, 340, 355, 340);

  // The pot design goes down here. \\

  noStroke ();
  fill (128, 64, 21);
  square (350, 390, 40);

  // I also wanted to draw a line on the vase/pot but at that point it didn't even bother popping up. \\

  print ("hello, I am from Arizona.");
  
  // create a vending machine using square and rectangles. \\
  fill (10, 10, 10);
  square (300, squareylocation, 45);
  square (375, squareylocation, 45);
  translate (3, -30)
  rect (335, vendingylocation, 120, 150);


  fill (200, 200, 245);
  translate (-10, 0);
  rect (335, vendingylocation, 90, 140);


  // create a window with sky background to create THAT environment. \\
  noStroke();
  noFill()
  stroke (0, 0, 0);
  strokeWeight(5);
  rect(150, 200, width/4, height/4);

  stroke (210, 210, 210);
  strokeWeight (5);
  fill (244, 244, 244, 256);

  line(65, 200, 235, 200);
  line(147, 285, 147, 115);

  noFill();
  noStroke();

  // put the sun in the window but make it the spotify logo for a random reason.. \\
  // to go along with the concept. \\
  fill (27, 229, 23);
  translate (5, 5);
  ellipse (spotifyXLocation, 150, width/9, height/9);

  stroke(0, 0, 0);
  strokeWeight (5);
  line (75, line1ylocation, 120, line1ylocation); // changed the y-variables in \\
  line (76, line2ylocation, 121, line2ylocation); // the three line columns to \\
  line (77, line3ylocation, 122, line3ylocation); // operate smmothly in key-pressed. \\
  
  // down here I also want to create a mouse, using line and triangle. \\

  translate (pmouseX, pmouseY);

  fill (255, 255, 255, 256);
  triangle (100, 100, 150, 125, 100, 150);

  noFill();
  line (125, 140, 150, 175);

}

function mousePressed ()
{
  r += 15; // increases the red value by 15
  g -- ;  // decreases the green value by (one)
  b ++;  // increases the blue value by (one)
  // I'd say with this imagine a dawn or sunset kind of vibe. \\

  spotifyXLocation -= 50
  line1ylocation += 15
  line2ylocation += 15
  line3ylocation += 15
  squareylocation -= 35;
  vendingylocation -= 35;

  expand += 5;
}

function keyPressed ()
{
  
  if (key === 'b')
    {
      r -= 15;
      g -= 15;
      b --;
      
      spotifyXLocation += 50;
      squareylocation += 35;
      vendingylocation += 35;
      line1ylocation -= 15;
      line2ylocation -= 15;
      line3ylocation -= 15;
      expand -= 5;
    
      // I'm glad that the line and ellipse goes back into the same frame at the window no matter how many \\
      // times the key-pressed or mouse-pressed function gets used. \\
    }
  
}