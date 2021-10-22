var student
function setup() {
  createCanvas(400,400);
student=new Student("jacob",14,9)
}

function draw() 
{
  background(30);
  student.display()
}