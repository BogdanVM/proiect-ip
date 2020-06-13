let r1;
let r2;
let m1;
let m2;
let a1;
let a2;
let a1_v;
let a2_v;
let g;

let px2;
let py2;
let cx, cy;

let buffer;

function SetupPendule() {
    r1 = 125;
    r2 = 125;
    m1 = 10;
    m2 = 10;
    a1 = 0;
    a2 = 0;
    a1_v = 0;
    a2_v = 0;
    g = 1;
    px2 = -1;
    py2 = -1;

    pixelDensity(1);

    a1 = PI / 2;
    a2 = PI / 2;
    cx = mouseX;
    cy = mouseY;

    delete buffer;

    buffer = createGraphics(width, height);
    buffer.background('rgba(0, 0, 0, 0)');
}

function DrawPendule() {
    clear();
    const xPos = ((px2 + mouseX) * 255) / width;
    const yPos = ((py2 + mouseY) * 255) / height;

    cx = mouseX;
    cy = mouseY;

    background(0, 0, 0, 0);
    imageMode(CORNER);
    image(buffer, 0, 0, width, height);

    let num1 = -g * (2 * m1 + m2) * sin(a1);
    let num2 = -m2 * g * sin(a1 - 2 * a2);
    let num3 = -2 * sin(a1 - a2) * m2;
    let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
    let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;

    num1 = 2 * sin(a1 - a2);
    num2 = a1_v * a1_v * r1 * (m1 + m2);
    num3 = g * (m1 + m2) * cos(a1);
    num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
    den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;

    translate(cx, cy);
    stroke(xPos, yPos, xPos / yPos);
    strokeWeight(5);

    let x1 = r1 * sin(a1);
    let y1 = r1 * cos(a1);

    let x2 = x1 + r2 * sin(a2);
    let y2 = y1 + r2 * cos(a2);

    // middle point
    line(0, 0, x1, y1);
    fill(0);
    ellipse(x1, y1, m1, m2);

    // bottom point
    line(x1, y1, x2, y2);
    fill(0);
    ellipse(x2, y2, m2, m2);

    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;

    buffer.stroke(xPos, yPos, xPos / yPos);
    buffer.strokeWeight(2);
    if (frameCount > 1) {
        buffer.line(px2 + mouseX, py2 + mouseY, x2 + mouseX, y2 + mouseY);
    }

    px2 = x2;
    py2 = y2;
}
