/* 
By Val
2/25
SS1_ValS

Personal Note: I don't have too many train of thought going into this,
but I'm willing to explore the concept of obscurity and
abstractness.. will update if I decide to change the concept

*/

function setup()
{

  //SETUP CANVAS SIZE.\\
  createCanvas (700, 700);
  rectMode (CENTER);

  //CREATE BG WITH R, G, B VALUES (0-255).. used adobe color.\\
  background(225, 209, 97);

  // this time around I'm gonna start off with a field, using quad. \\
  // and fill this as well. \\
  fill (130, 96, 88);
  quad (125, 400, 575, 400, 700, 700, 0, 700);

  // disable fill for other designs. \\
  noFill();

  // create a vending machine using square and rectangles. \\
  fill (10, 10, 10);
  square (300, 400, 45);
  square (375, 400, 45);
  translate (3, -30)
  rect (335, 345, 120, 150);

  fill (200, 200, 245);
  translate (-10, 0);
  rect (335, 345, 90, 140);


  // create a window with sky background to create THAT environment. \\
  noFill()
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
  ellipse (100, 150, width/9, height/9);

  stroke(0, 0, 0);
  strokeWeight (5);
  line (75, 140, 120, 140);
  line (76, 150, 121, 150);
  line (77, 160, 122, 160);

 
}

function draw() 
{
    /*
  //CREATE BG WITH R, G, B VALUES (0-255).. used adobe color.\\
  background(225, 209, 97);

  // this time around I'm gonna start off with a field, using quad. \\
  // and fill this as well. \\
  fill (130, 96, 88);
  quad (125, 400, 575, 400, 700, 700, 0, 700);

  // disable fill for other designs. \\
  noFill();

  // create a vending machine using square and rectangles. \\


  // create a window with sky background to create THAT environment. \\
  rect(150, 200, width/4, height/4);

  stroke (210, 210, 210);
  strokeWeight (25);
  fill (244, 244, 244, 256);

  line(65, 200, 235, 200);
  line(147, 285, 147, 115);

  noFill();
  noStroke();

  //put the sun in the window but make it the spotify logo for a random reason. \\
  fill (27, 229, 23);
  ellipse (65, 100, width/5, height/5);
*/
}