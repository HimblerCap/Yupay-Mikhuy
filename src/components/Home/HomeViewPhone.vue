<template>
    <v-container fluid class="ma-0 pa-0 hidden-sm-and-up" >
        <v-row align="center" justify="center" fluid class="fill-height">
            <v-container class="welcome-card">
                <img src="@/assets/img/dish-welcome.png" alt="Welcome Picture" class="welcome-image">
                <div class="welcome-message">
                    Welcome
                    <br>
                    <br>
                    Gengis Gutierrez!
                </div>
            </v-container>
        </v-row>
        <v-row align="center" fluid class="fill-height pt-10">
            <h2 class="pt-5">Platos que puedes preparar</h2>

            <v-card
                class="mx-auto my-3"
                max-width="300"
            >
            <v-img
                height="150"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            >
            </v-img>

            <v-card-title><span style="color:#FFAD60">Lomo Saltado</span></v-card-title>
            <v-card-text>
                Una pequeña descripción
            </v-card-text>
            </v-card>
            <v-card
                class="mx-auto my-3"
                max-width="300"
            >
            <v-img
                height="150"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            >
            </v-img>

            <v-card-title><span style="color:#FFAD60">Lomo Saltado</span></v-card-title>
            <v-card-text>
                Una pequeña descripción
            </v-card-text>
            </v-card>
            
        </v-row>
    </v-container>
</template>

<script>
import * as tf from '@tensorflow/tfjs';
import { file2LocalStorage,  completeArray, predict } from '../../utils/utils';
// import { getData, data2Tensor } from '../../utils/utils';
// import { createModel, modelTraining } from '../../models/model';

// async function trainModel(){
//      const path = "https://himblercap.github.io/Horario-Generator/newData.json";

//      const train_data = await getData(path);

//      const tensorData = data2Tensor(train_data);

//      const model = createModel();

//     await modelTraining(model, tensorData.inputs, tensorData.labels);
    
// }

// trainModel()


async function loadAndPredict(){
    let listToIngredient = []
     if(localStorage.getItem('tensorflowjs_models/recieps/info') === null){
         file2LocalStorage();
     }
    const model = await tf.loadLayersModel('localstorage://recieps');
    fetch("https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/users/products/MDAsyGDYliP00B1LQqjAmZSYUc02")
     .then((response) =>
         response.json())
     .then((data) => {
        for(var i=0; i< data.length; i++) {
            listToIngredient.push(data[i].name)   
        }

        //Complete the array with 1 and 0
         var input = completeArray(listToIngredient);

         //pass data to tensor
         const valuesTensor = tf.tensor2d(input, [1, 106]);
        
         //predict
         const food = predict(model, valuesTensor);
         console.log(food)
     })  
}

loadAndPredict();

export default {
  name: 'HomeViewPhone',
  data () {
    return {
    }
  },
}

</script>

<style>
.welcome-card{
    position: relative;
    width: 98%;
    height: 131px;
    top: 25px;
    left: 1%;
    background: rgba(235, 193, 132, 0.794);
    border-radius: 17px;
}
.welcome-image{
    position: absolute;
    width: 29%;
    top: 16%;
    left: 5%;
}
.welcome-message{
    position: absolute;
    left: 40%;
    top: 33.5px;
    width: 187px;
    height: 64px;
    size: 20px;
    font-weight: bolder;
    font-size:21px;
    line-height:16px;
    display:flex;
    align-items: center;
    color: #000;
}
</style>




