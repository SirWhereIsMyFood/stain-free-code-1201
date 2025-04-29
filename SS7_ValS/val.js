/*

SS7
by Val S.
(04/27/25)

For this sketch, I'm likely making a class of a vending machine,
seeing with how I'm able to manage this considering the amount of primitive
shapes it takes to make one (scaling, size, location).

*/

/*
let vending1;
let vending2; this succesfully worked, so I'm throwing it into an array
*/

let machines = [];
machines.length = 250;

function setup ()
{

  createCanvas (windowWidth, 1000);

  /* intializing vending machine in setup by calling it's class name & constructor 
  vending1 = new Vending (100, 250);
  vending2 = new Vending (400, 450); */

  for (let i = 0; i < machines.length; i++)
  {
    machines[i] = new Vending (random(width), random(height));
  }
}

function draw ()
{
  background (200);

  /*
  vending1.disp();
  vending2.disp(); */

  for (let i = 0; i < machines.length; i++)
  {
    machines[i].disp();
    machines[i].time();
  }

}

class Vending
{

  constructor (tX, tY)
  {
    this.x = tX;
    this.y = tY;
    this.w = width;
    this.h = height;
    this.size = 100;
    this.dia = 15;

    this.squareFill = ['0', '0', '0', '300'];
    this.vendingFill = ['10', '10', '10'];
    this.panelFill = ['200', '200', '245'];
    this.buttonFill = ['226', '226', '226'];

    this.ctime = 0;
    this.ptime = 0;
    this.timer = 1500;
  }

  disp ()
  {
    /* Doing the legs/stands first */
    push ();
    fill (this.squareFill);
    square (this.x + 40, this.y + 500, this.size);
    square (this.x + 205, this.y + 500, this.size);
    pop ();

    /* Now focus on the body of the vending machine */
    push ();
    fill (this.vendingFill);
    rect (this.x + 25, this.y, this.w / 5, this.h / 2);
    pop ();

    /* This is the panel (the window displaying items) */
    push ();
    fill (this.panelFill);
    rect (this.x + 50, this.y + 25, this.w / 7, this.h / 2.25);
    pop ();

    /* now onto the buttons */
    push ();
    fill (this.buttonFill);
    ellipse (this.x + 275, this.y + 275, this.dia, this.dia);
    ellipse (this.x + 290, this.y + 275, this.dia, this.dia);
    ellipse (this.x + 275, this.y + 290, this.dia, this.dia);
    ellipse (this.x + 290, this.y + 290, this.dia, this.dia);
    pop ();
  }

  time ()
  {
    this.ctime = millis();

    if (this.ctime - this.ptime >= this.timer)
    {

      this.ptime = this.ctime;

      this.buttonFill[0] = random(20, 170);
      this.buttonFill[1] = random (15, 190);
      this.buttonFill[2] = random (20, 166);
    }
  }
}
