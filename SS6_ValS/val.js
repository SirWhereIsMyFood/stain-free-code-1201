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
let spheres = [];

/* TIMER VAR'S */
let ctime = 0;
let ptime = 0;
let timer = 500;

/* STROKE VAR'S */
let rs = random (50, 200);
let gs = random (50, 200);
let bs = random (50, 200);

function setup ()
{

    createCanvas (1000, 1000, WEBGL);

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

    background (10);

    noFill ();
    stroke (0, 200, 0);
    sphere (100);
    

}