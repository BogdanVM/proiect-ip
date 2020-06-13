let leftscore = 0;
let rightscore = 0;

//Folosit pt testare
// function setup() {
//     const cnv = createCanvas(640, 480);
//     cnv.parent('front-container');
//     // ding = loadSound('data/ding.mp3');
//     SetupPong();
// }

//Folosit pt testare
function drawPong() {
    clear();
    DrawPong(mouseX, mouseY);
}

function SetupPong() {
    delete puck;
    delete left;
    delete right;
    stroke(0);
    strokeWeight(1);

    leftscore = 0;
    rightscore = 0;

    puck = new Puck();
    left = new Paddle(true);
    right = new Paddle(false);
}

function DrawPong(handPosX, handPosY) {
    background(0, 0, 0, 0);

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
