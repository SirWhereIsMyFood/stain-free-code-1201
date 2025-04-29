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
let vending2;

function setup ()
{

  createCanvas (windowWidth, windowHeight);

}

function draw ()
{



}

class Vending
{


}
*/

let icecream1;
let icecream2;

function setup() 
{
  createCanvas (500, 500);
	
  //initialize objects in setup() by calling the constructor
  //nameOfObject= new ClassName()
  icecream1 = new Icecream(100, 250, 65);
  icecream2 = new Icecream(300, 350, 75);
}

function draw() 
{
  background(200);
	
	print(icecream1.diameter);
	
  //call methods on the object from within draw()
  icecream1.display(); 
  icecream2.display();
  icecream1.fall();
  icecream2.fall();
  icecream1.grow();
  icecream2.grow();
}

//define the class outside of setup() and draw()
//can be placed below draw or as a separate file tab
//name of class gets capitalized

class Icecream 
{
  
  //**constructor**
  //like setup() function within class
  //constructor arguments are temporary and used to initialize values inside object
  constructor(tempX, tempY, tempDiameter) 
	{
    this.x= tempX;
    this.y= tempY;
    this.diameter= tempDiameter;
  }

  //**methods** 
  //these are functions for the object
  display() { //method
    triangle(this.x, this.y, this.x+50, this.y, this.x+25, this.y+100);
    ellipse(this.x+25, this.y, this.diameter, this.diameter);
  } 

  fall() 
	{ //method
    if (this.y>height+100) 
		{
      this.y =- 100;
    } 
		else 
		{
      this.y++;
    }
  }

  grow() 
	{ //method
    this.diameter = constrain(this.diameter, 0, width); //constrains values of this.diameter between 0 and width
    if (keyIsPressed) 
		{
      if (key === '1') 
			{
        this.diameter++;
      } 
			else if (key ==='2') 
			{
        this.diameter--;
      }
    }
  }
}