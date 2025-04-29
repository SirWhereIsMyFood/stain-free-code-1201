/*

SS7
by Val S.
(04/27/25)

For this sketch, I'm likely making a class of a vending machine,
seeing with how I'm able to manage this considering the amount of primitive
shapes it takes to make one (scaling, size, location).

*/

let vending1;
let vending2;

function setup ()
{

  createCanvas (windowWidth, windowHeight);

  /* intializing vending machine in setup by calling it's class name & constructor */
  vending1 = new Vending (100, 250);
  vending2 = new Vending (400, 450);

}

function draw ()
{
  background (200);

  vending1.disp();
  vending2.disp();

}

class Vending
{

  constructor (tX, tY)
  {
    this.x = tX;
    this.y = tY;
    this.w = width;
    this.h = height;
    this.size = 50;

    this.squareFill = ['0', '0', '0', '300'];
    this.vendingFill = ['10', '10', '10'];
    this.panelFill = ['200', '200', '245'];
  }

  disp ()
  {
    /* Doing the legs/stands first */
    push ();
    fill (this.squareFill);
    square (this.x + 25, this.y, this.size);
    square (this.x + 100, this.y, this.size);
    pop ();

    /* Now focus on the body of the vending machine */
    push ();
    fill (this.vendingFill);
    rect (this.x + 25, this.y, this.w / 3, this.h / 1.5);
    pop ();

    /* This is the panel (the window displaying items) */
    push ();
    fill (this.panelFill);
    rect (this.x + 25, this.y, this.w / 4, this.h / 1.75);
    pop ();
  }

}
