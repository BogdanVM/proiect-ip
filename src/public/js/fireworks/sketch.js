var fireworks = [];
var gravity;

function SetupFireworks () {
    colorMode(HSB);
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
    background('rgba(0, 0, 0, 0)');
}

function DrawFireworks () {
    colorMode(RGB);
    background(0, 0, 0, 0);

    if (random(1) < 0.03) {
        const posX = random(mouseX - 10, mouseX + 10);
        const posY = random(mouseY - 10, mouseY + 10);
        fireworks.push(new Firework(posX, posY));
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();

        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}