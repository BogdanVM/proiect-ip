let slider;
let phase = 0;
let zoff = 0;

let perlineCircle;

function setup() {
    const cnv = createCanvas(600, 600);
    cnv.parent('content');

    slider = createSlider(0, 10, 5, 0.1);
    slider.parent('content');

    perlineCircle = new PerlineCircle(slider);
}

function draw() {
    perlineCircle.show();
}
