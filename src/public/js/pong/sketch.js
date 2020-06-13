// port of Daniel Shiffman's Pong coding challenge
// by madacoo

let leftscore = 0;
let rightscore = 0;

//Folosit pt testare
function setup() {
    const cnv = createCanvas(600, 600);
    cnv.parent('content');
    // ding = loadSound('data/ding.mp3');
    SetupPong();
}

//Folosit pt testare
function draw() {
    DrawPong(mouseX, mouseY);
}

function SetupPong() {
    puck = new Puck();
    left = new Paddle(true);
    right = new Paddle(false);
}
function DrawPong(handPosX, handPosY) {
    background(0);

    puck.checkPaddleRight(right);
    puck.checkPaddleLeft(left);

    //My part
    left.move(handPosY);
    right.ai_move(puck.y);

    left.show();
    right.show();
    left.update();
    right.update();

    puck.update();
    puck.edges();
    puck.show();

    fill(255);
    textSize(32);
    text(leftscore, 32, 40);
    text(rightscore, width - 64, 40);
}
