import * as tf from '@tensorflow/tfjs';

//Create Model 
function createModel(){
    const model = tf.sequential({
        layers: [
            tf.layers.dense({inputShape: [105], units: 192, activation: 'relu'}),
            tf.layers.dense({units: 51, activation:'softmax'}),
        ]
    });

    return model;
}


//Train the model
async function modelTraining(model, inputs, labels){
    // Prepare the model for training
    model.compile({
        optimizer: 'sgd',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy'],
    })
    const tamanioBatch = 28;
    const epochs = 60;
    
    model.fit(inputs, labels, {
        epochs: epochs,
        batchSize: tamanioBatch,
    }).then(info => {
        console.log('Modelo entrenado');
        model.save('localstorage://recieps');
        console.log('Modelo guardado');
    })
}


export { createModel, modelTraining };


