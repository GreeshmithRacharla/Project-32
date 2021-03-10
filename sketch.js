var ground1;
var box1,box2,box3,box4,box5;
var polygon,slingshot;

function setup() {
  createCanvas(800,400);
  
  ground1 = new Ground(400,100,20,5);
  box1 = new Box(700,320,70,70,67);
  box2 = new Box(920,320,70,70,76);
  box3 = new Box(700,240,70,70,67);
  box4 = new Box(920,240,70,70,67);
  box5 = new Box(810,160,70,70,67);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon, {x:100, y:200});



}

function draw() {
  background(255,255,255); 
  
  ground1.display();
  block1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
} 

function attach(){
  if(keyCode===32)
  slingshot.attach(this.polygon);
} 

async function getBackgroundImage(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  if(hour >= 06 && hour <= 18){
    bg = "images/light.jpg";
  }
else{
    bg = "images/dark.jpg";
}


}