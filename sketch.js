var box
function setup() 
{
  createCanvas(400, 400);

  box = new Box(200,200,50,50,3,2);
}

function draw() 
{
  background(220);
  box.show()
  box.moveUp()
}

