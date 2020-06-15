import * as tf from '@tensorflow/tfjs';

export function loadModule (path) {
    const model = await tf.loadLayersModule(path);
    return model;
}

export function predict (model, webcamElement) {
    const example = tf.fromPixels(webcamElement);
    const prediction = model.predict(example);

    return prediction;
}