class PerlineCircle {
    constructor(slider) {
        this.slider = slider;
        this.zoff = 0;
        this.phase = 0;
    }

    show() {
        noiseSeed(99);
        background(0);
        translate(width / 2, height / 2);
        stroke(255);
        noFill();

        beginShape();
        const noiseMax = this.slider.value();
        for (let i = 0; i < TWO_PI; i += radians(5)) {
            const xoff = map(cos(i + this.phase), -1, 1, 0, noiseMax);
            const yoff = map(sin(i + this.phase), -1, 1, 0, noiseMax);

            const r = map(noise(xoff, yoff, this.zoff), 0, 1, 100, height / 2);
            const x = r * cos(i);
            const y = r * sin(i);

            vertex(x, y);
        }
        endShape(CLOSE);

        this.zoff += 0.1;
        this.phase += 0.003;
    }
}
