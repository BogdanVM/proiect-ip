// Flocking
// Daniel Shiffman
// https://thecodingtrain.com

// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
// https://editor.p5js.org/codingtrain/sketches/ry4XZ8OkN

let flock = [];

function drawBoids() {
    clear();
    background('rgba(0,0,0, 0)');
    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}

function SetupBoids() {
    colorMode(RGB);
    flock = [];
    for (let i = 0; i < 50; i++) {
        flock.push(new Boid());
    }
}
