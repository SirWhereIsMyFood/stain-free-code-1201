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
	
	offset = height/2; /* Offset is 250 */
	yPrev = height/2; /* Previous Y-pos is 250 */
}

function draw() 
{	
	r = map(xPos, 0, width, 50, 150);
	g = map(xPos, 0, width, 0, 255);
	b = map(xPos, 0, width, 255, 0);
	
	background(r, g, b, 5); 

	lerpAmount = map(mouseY, 0, height, 0.2, 0.9);
	
  yPos = amplitude * sin(xPos * frequency) + offset;
	
	yPos = lerp(yPrev, yPos, lerpAmount);
	xPos = lerp(xPrev, xPos, lerpAmount);
	
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