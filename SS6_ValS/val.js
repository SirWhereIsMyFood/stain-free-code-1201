/*

SS6
by Val S.
(04/20/24) (happy easter!)

I don't plan to completely strive away from the idea of a vending machine, but I just
feel like sticking to it feels limiting at times, so I'm just testing out other ideas
that I had in mind.

" Just enjoy the show.. "

No keys need to be pressed, sit back and relax for this time around.


refs:
https://editor.p5js.org/doulcks/sketches/BkhiUkAfe
https://editor.p5js.org/amcc/sketches/FiNt9_po
*/

/* ARRAYS */
let arrayVal = [];

let message = [" enjoy the time ", " immerse yourself! ", " take a break, sit back and relax ", " enjoy the show!"];
let positionMessage = 0;

/* TIMER VAR'S */
let ctime = 0;
let ptime = 0;
let timer = 2000;

/* STROKE VAR'S */
let rs = 0;
let gs = 0;
let bs = 0;

/* STROKE WEIGHT VAR */
let swsize = 0

function setup ()
{

    createCanvas (windowWidth, windowHeight, WEBGL);
    textSize (50);
    textAlign (CENTER, CENTER);

    for (let i = 4; i <= 12; i ++)
    {
        arrayVal[i - 4] = pow (i, 2);

        print("Sphere rad" + (i - 4) + " ] = " + arrayVal[i - 4]);
    }

    

    /* Creating different sphere's object scales, colors and movement. */
    /*
    for (let i = 0; i < arrayVal.length; i ++)
    {
        spheres.push
        ({
            rotateY: (frameCount * 0.01),
            sphere: (arrayVal[i]),
            stroke: (rs, gs, bs),
        })    
    }
        */
}

function draw ()
{
    let angle = frameCount * 0.01;
    ctime = millis ();
    background (10);

    if (ctime - ptime >= timer)
    {

        ptime = ctime

        rs = arrayVal [int(random(arrayVal.length))];
        gs = arrayVal [int(random(arrayVal.length))];
        bs = arrayVal [int(random(arrayVal.length))];

        strokeWeight (random(0, 10));

        print ("current time : " + ctime);
        print ("ArrayV value is: " + arrayVal);

        positionMessage = int(random(0, message.length));
    }

    background (bs, gs, rs);
    for (let i = 0; i <= windowWidth; i++) 
    {
        for (let y = 0; y < 1; y++)
    {
        push();
    rotateY (angle);
    noFill ();
    translate (i * 70, y);
    stroke (rs, gs, bs);
    sphere (100);
    pop();
    }
}

        push();
        fill (255);
        translate (500, 500);
        text (" hey! " + message[positionMessage] + ".", width/2, height/4);
        pop();

}