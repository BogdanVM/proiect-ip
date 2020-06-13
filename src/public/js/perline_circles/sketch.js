let slider;
let phase = 0;
let zoff = 0;

let perlineCircle;

function SetupPerline() {
    delete perlineCircle;
    phase = 0;
    zoff = 0;

    perlineCircle = new PerlineCircle();
}

function DrawPerline() {
    perlineCircle.show();
}
