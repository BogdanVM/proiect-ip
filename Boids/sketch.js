// Boids

const flock = [];

let alignSlider, cohesionSlider, separationSlider;

//Folosit pentru testare
function setup() {
  createCanvas(640, 360);
  
  SetupBoids();
}

//Folosit pentru testare
function draw() {
  DrawBoids(mouseX, mouseY);
}

function SetupBoids()
{
   alignValue = 0.6;
   cohesionValue = 0.3;
   separationValue = 1.2;

  for (let i = 0; i < 100; i++) {
    flock.push(new Boid());
  }
}

function DrawBoids(handPosX, handPosY){
  
  //Folosit pt testare
  //alignSlider = createSlider(0, 2, 1, 0.1);
  //cohesionSlider = createSlider(0, 2, 1, 0.1);
  //separationSlider = createSlider(0, 2, 1, 0.1);
  
  background(51);
  for (let boid of flock) {
    boid.edges();
    boid.updateHandPosition(handPosX,handPosY); // MY PART
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}