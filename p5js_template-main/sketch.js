var ball ={
  x:20,
  y:30,
  radius:30,
  colour:"blue",
  xspeed:0
};




function setup() {
  createCanvas(400, 400);

  console.log (ball.x)


}

function draw() {
  background(220);

  circle(ball.x,ball.y,ball.radius)
  fill(ball.colour)

   ball.xspeed = 1 

  ball.x =ball.x + ball.xspeed

}