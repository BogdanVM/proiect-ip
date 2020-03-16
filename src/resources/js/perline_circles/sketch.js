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
    // noiseSeed(99);
    // background(0);
    // translate(width / 2, height / 2);
    // stroke(255);
    // noFill();

    // beginShape();
    // const noiseMax = slider.value();
    // for (let i = 0; i < TWO_PI; i += radians(5)) {
    //     const xoff = map(cos(i + phase), -1, 1, 0, noiseMax);
    //     const yoff = map(sin(i + phase), -1, 1, 0, noiseMax);

    //     const r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    //     const x = r * cos(i);
    //     const y = r * sin(i);

    //     vertex(x, y);
    // }
    // endShape(CLOSE);

    // zoff += 0.1;
    // phase += 0.003;
}
