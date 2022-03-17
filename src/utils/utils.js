import * as tf from '@tensorflow/tfjs';
import axios from 'axios';

//Get Data 
async function getData(path){
    const response = await fetch(path);
    const datos = await response.json();

    return datos;
}


//Convert Data to Tensor
function data2Tensor(data) {
    const values = [];

    for(var i=0; i < Object.values(data).length; i++){
        var value = Object.values(data[i]);
        values.push(value.filter((d) => d==0 || d ==1));
    }

    for(var j=0; j<values.length;j++){
        if(values[j].length===159){
            values[j].pop()
        }
    }

    const labels = data.map((d) => d.Label);    

    const valuesTensor = tf.tensor2d(values, [values.length, 106]);
    const labelTensor = tf.oneHot(tf.tensor1d(labels).toInt(), 51);

    return {
        inputs: valuesTensor,
        labels: labelTensor,
    }
}


//Pass model from file storage to local storage
function file2LocalStorage(){
    const model = require('../models/recieps.json');
    localStorage.setItem('tensorflowjs_models/recieps/info', model.info);
    localStorage.setItem('tensorflowjs_models/recieps/model_topology', model.modelTopology);
    localStorage.setItem('tensorflowjs_models/recieps/model_metadata', model.modelMetadata);
    localStorage.setItem('tensorflowjs_models/recieps/weight_data', model.weightData);
    localStorage.setItem('tensorflowjs_models/recieps/weight_specs', model.weightSpecs);
}

function filterData(productsData){
    let arrayTest = [];
    productsData.forEach((lista) => {
        lista.products.forEach((product) => {
            let data = {
                type: lista.type,
                ...product
            }
            arrayTest.push(data)
        })
    })
    return arrayTest
}
    

function methodToGet(){
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const yourUrl = 'https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/products';
    axios
        .get(corsAnywhere + yourUrl  , {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    })
        .then((response) => {
            this.filterData(response.data)
        })
}

export { getData, data2Tensor, file2LocalStorage, methodToGet};

