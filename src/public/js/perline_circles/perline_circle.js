class PerlineCircle {
    constructor(slider) {
        this.slider = slider;
        this.zoff = 0;
        this.phase = 0;
    }

    show() {
        noiseSeed(99);
        background(0);
        translate(mouseX, mouseY);
        stroke(255);
        noFill();

        beginShape();
        const noiseMax = this.slider.value();
        for (let i = 0; i < TWO_PI; i += radians(5)) {
            const xoff = map(cos(i + this.phase), -1, 1, 0, noiseMax);
            const yoff = map(sin(i + this.phase), -1, 1, 0, noiseMax);

            const r = map(
                noise(xoff / 3, yoff / 3, this.zoff / 3),
                0,
                1,
                100,
                height / 2
            );
            const x = r * cos(i);
            const y = r * sin(i);

            vertex(x / 4, y / 4);
        }
        endShape(CLOSE);

        this.zoff += 0.1;
        this.phase += 0.003;
    }
}
