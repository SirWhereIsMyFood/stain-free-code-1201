let amplitude = 150; /* How high/low the circle goes */
let frequency = 0.05; /* How often/frequent the circle moves in a different direction */
let xPos = 0; /* X-position is set to 0, left side of canvas */
let yPos = 0; /* Y-position is set to 0, left side of canvas */
let xPrev = 0; /* Previous x position/value */
let yPrev; /* Previous y position/value */
let offset; /* Retrieves current value */
let amount; /* Amount of something */
let r; /* Background variables */
let g;
let b;

function setup() 
{
	createCanvas(1000, 500);
	strokeWeight(2);
	fill(255, 255, 255, 50);
	
	offset = height/2; /* Offset is centered y-axis */
	yPrev = height/2; /* Previous Y-pos is centered of axis */
}

function draw() 
{	
	r = map(xPos, 0, width, 50, 150); /* red is (x-pos, start at 0, stops at width, starts second value at 50, stops at 150)  */ 
	g = map(xPos, 0, width, 0, 255); /* blue is (x-pos, start at 0, stops at width, starts second value at 0, stops at 255) */
	b = map(xPos, 0, width, 255, 0); /* green is (x-pos, start at 0, stops at width, starts second value at 255, stops at 0) */

	background(r, g, b, 5); /* Background is constantly shifting in color values based on map function. */

	lerpAmount = map(mouseY, 0, height, 0.2, 0.9); /* Although I don't understand it completely, it creates the movement of the circle path. */
	
  yPos = amplitude * sin(xPos * frequency) + offset; /* The y-pos is the amplitude multiplied by sin, and x-pos is multiplied by the
  frequency of how often it happens + the current value (offset) */ 
	
	yPos = lerp(yPrev, yPos, lerpAmount); /* Y-pos */
	xPos = lerp(xPrev, xPos, lerpAmount); /* */
	
	circle(xPos, yPos, 50);
	
	line(xPrev, yPrev, xPos, yPos);
	
	yPrev = yPos;
	xPrev = xPos;
	
	xPos++;
	
	if (xPos > width)
	{
		xPos = 0;
		xPrev = xPos; /* Returns position back to first value */
	}
}