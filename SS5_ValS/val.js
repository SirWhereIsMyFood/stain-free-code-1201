function setup ()
{

  createCanvas (1000, 1000);
  background (50);
  rectMode (CENTER);

}

function draw ()
{

  let y = 0;

  background (20, 198, 77);
  for (let y = width; y >= 0; y -= 50 )
  {
    fill (60, 100, random (1, 100))
    rect (width / 2, height / 2, y, y);
  }

}