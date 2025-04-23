/*

SS6
by Val S.
(04/20/24) (happy easter!)

I don't plan to completely strive away from the idea of a vending machine, but I just
feel like sticking to it feels limiting at times, so I'm just testing out other ideas
that I had in mind.

" Just enjoy the show.. "

No keys need to be pressed, sit back and relax for this time around.

*/

/* ARRAYS */
let arrayVal = [];

let message = [];


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
    }

    background (bs, gs, rs);
    rotateY (angle);
    noFill ();
    stroke (rs, gs, bs);
    //strokeWeight (random(0, 10));
    sphere (100);

    push();
    fill (0);
    strokeWeight (5);
    text (' Welcome ', 100, 100);
    pop();

}