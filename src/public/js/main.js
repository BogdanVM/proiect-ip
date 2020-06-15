import * as tf from '@tensorflow/tfjs';

let currentEffect = 0;

window.onload = () => {
    const cnv = createCanvas(640, 480);
    cnv.parent('front-container');

    document.addEventListener('keypress', logKey);
};

function draw() {
    switch (currentEffect) {
        case 1: {
            drawPong();
            break;
        }

        case 2: {
            drawBoids();
            break;
        }

        case 3: {
            DrawFireworks();
            break;
        }

        case 4: {
            DrawFluids(mouseX, mouseY);
            break;
        }

        case 5: {
            DrawPendule();
            break;
        }

        case 6: {
            DrawPerline();
            break;
        }
    }
}

function logKey(e) {
    switch (e.code) {
        case 'Digit1': {
            clear();
            currentEffect = 1;
            SetupPong();

            break;
        }

        case 'Digit2': {
            clear();
            currentEffect = 2;
            SetupBoids();

            break;
        }

        case 'Digit3': {
            clear();
            currentEffect = 3;
            SetupFireworks();

            break;
        }

        case 'Digit4': {
            clear();
            currentEffect = 4;
            SetupFluids();

            break;
        }

        case 'Digit5': {
            clear();
            currentEffect = 5;
            SetupPendule();

            break;
        }

        case 'Digit6': {
            clear();
            currentEffect = 6;
            SetupPerline();

            break;
        }
    }
}
