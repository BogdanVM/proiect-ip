let fluid;

//Folosit pt testare
function setup() {
    const cnv = createCanvas(600, 600);
    cnv.parent('content');
    //frameRate(22);
    SetupFluids();
}

//Folosit pt testare
function draw() {
    DrawFluids(mouseX, mouseY);
}

function SetupFluids() {
    fluid = new Fluid(0.2, 0, 0.0000001);
}
function DrawFluids(handPosX, handPosY) {
    stroke(51);
    strokeWeight(2);

    let cx = int(handPosX / SCALE); //int((0.5 * width) / SCALE);
    let cy = int(handPosY / SCALE); //int((0.5 * height) / SCALE);
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            fluid.addDensity(cx + i, cy + j, random(50, 150));
        }
    }

    for (let i = 0; i < 2; i++) {
        let angle = noise(t) * TWO_PI * 2;
        let v = p5.Vector.fromAngle(angle);
        v.mult(0.2);
        t += 0.01;
        fluid.addVelocity(cx, cy, v.x, v.y);
    }

    fluid.step();
    fluid.renderD();
}
