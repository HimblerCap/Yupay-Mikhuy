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
         if(values[j].length===107){
             values[j].pop()
         }
    }

    const labels = data.map((d) => d.Label);    

    console.log(values[0]);

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
    for(let l=0; l<arrayTest.length; l++){
        arrayTest[l].quantity = ""; 
    }
    return arrayTest
}
    

function methodToGet(type = ""){
    // let dataAPI = null
    axios.get("https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/products/" + type)
      .then(response => {
        return filterData(response.data)
    })
}


function completeArray(data){
    const inputName = ['Plátano',
    'Aceituna verde',
    'Ají mirasol',
    'Beterraga',
    'Laurel',
    'Hongos y laurel',
    'Mantequilla',
    'Carne de res',
    'Sibarita',
    'Vino tinto',
    'Aji limo',
    'Tocino fino',
    'Gallina',
    'Cerdo',
    'Sillao',
    'Kion',
    'Huevos',
    'Aji mirasol',
    'Trigo mote',
    'Papa amarilla',
    'Leche',
    'Apio',
    'Camote amarillo procesado',
    'Pecanas',
    'Arverja',
    'Lomo fino de res',
    'Comino en polvo',
    'Nabo',
    'Aji panca',
    'Pescado',
    'Frijol canario',
    'Limon sutil',
    'Mayonesa',
    'Cebollita china',
    'Cebolla rpja',
    'Habas verdes',
    'Vainita americana',
    'Oregano molido',
    'Olluco',
    'Galleta soda',
    'Queso',
    'Pimientos',
    'Albahaca',
    'Lechuga americana',
    'Pollo',
    'Zanahoria',
    'Vainatas',
    'Azúcar',
    'Sal',
    'Pimiento',
    'Papa yungay natural',
    'Cabello de angel',
    'Aceite vegetal',
    'Pimienta',
    'Lenteja',
    'Hot dog',
    'Ajinomoto',
    'Paico',
    'Fideo corbata',
    'Yuca',
    'Espinaca',
    'Col china mitad',
    'Ají limo',
    'Alcachofa',
    'Cebolla blanca',
    'Pescado perico',
    'Aceite de ajonjolí',
    'Papa canchan procesada',
    'Carne de bisteck',
    'Zapallo loche',
    'Atún',
    'Pallar',
    'Tomate italiano selecto',
    'Aji amarillo',
    'Harina',
    'Romero',
    'Aceite de oliva',
    'Aceitunas',
    'Arveja',
    'Mani',
    'Poro',
    'Arroz',
    'Cebolla roja',
    'Salsa de ostion',
    'Choclo serrano selecto',
    'Pimienta negra',
    'Chancho',
    'Culantro',
    'Chuño',
    'Jengibre',
    'Vinagre',
    'Perejil',
    'Galleta vainilla',
    'Hierba buena',
    'Sémola',
    'Cabeza de cordero',
    'Pimienta blanca',
    'Cebolla china',
    'Rocoto',
    'Ají panca',
    'Palillo',
    'Ajo',
    'Ají amarillo',
    'Fideo',
    'Cerveza rubia',
    'Huacatay'];
    var arrayOneCero = [];
    
    inputName.forEach((item) => {
        if(data.includes(item.toLowerCase())){
            arrayOneCero.push(1.0);
        }
        else{
            arrayOneCero.push(0.0);
        }
    })

    return arrayOneCero;
}

function predict(model, valuesTensor){
    const labels =['Seco de pollo',
    'Tallarines verdes',
    'Caldo de gallina',
    'Arverjitas partidas',
    'Papa a la huancaina',
    'Pollo al horno',
    'Arroz con pollo',
    'Bistec a lo pobre',
    'Tacu tacu',
    'Aguadito de pollo',
    'Estofado de pollo',
    'Arroz con chancho',
    'Sopa de semola',
    'Chicharron de chancho',
    'Arroz chaufa',
    'Ceviche de pollo',
    'Lomo saltado',
    'Escabeche de pescado',
    'Tiradito de pescado',
    'Ensalada rusa',
    'Seco de res',
    'Pollo al sillao',
    'Sopa de verduras',
    'Patasca',
    'Sopa menestron',
    'Locro de zapallo',
    'Arroz a la jardinera',
    'Caldo de cordero',
    'Tallarines con pollo',
    'Menestron rojo',
    'Chanfainita',
    'Sancochado',
    'Estofado de carne',
    'Sopa de paico',
    'Ocopa',
    'Olluquito con pollo',
    'Causa de atun',
    'Bistec con papas',
    'Sopa de lentejas',
    'Sopa a la minuta',
    'Papa rellena',
    'Olluquito con carne',
    'Causa rellena',
    'Seco a la nortena',
    'Sopa criolla',
    'Milanesa de carne',
    'Aji de gallina',
    'Pure de papas',
    'Guiso de lentejas',
    'Crema de rocoto',
    'Adobo de pescado'];

    const prediction = model.predict(valuesTensor);
    const values = prediction.dataSync();
    var max = 0;
    var index = 0;

    for(var i=0; i<values.length; i++){
        if(values[i]> max){
            max = values[i];
            index = i;
        }
    }
    
    const finalPrediction = labels[index];
    return finalPrediction;
}


export { getData, data2Tensor, file2LocalStorage, methodToGet, completeArray, predict};

