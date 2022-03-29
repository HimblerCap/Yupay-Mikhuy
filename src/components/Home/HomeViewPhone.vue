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
            <h2 class="pt-5">Dishes you can prepare</h2>

            <v-card v-if="food === 'Lomo saltado'"
                class="mx-auto my-3"
                max-width="300"
            >
                <v-img
                    height="150"
                    :src="dishes[8].Lomo"
                >
                </v-img>

                <v-card-title><span style="color:#FFAD60">{{ food }}</span></v-card-title>
                <v-card-text>{{ dishes[8].Description }}</v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import * as tf from '@tensorflow/tfjs';
import { file2LocalStorage,  completeArray, predict } from '../../utils/utils';
import dishes from '../../database/dish.json';

export default {
  name: 'HomeViewPhone',
  data () {
    return {
       food: 'value',
       dishes: dishes,
    }
  },
  mounted(){
      this.predict();
  },
  methods: {
      predict() {
          if(localStorage.getItem('tensorflowjs_models/recieps/info') === null){
            file2LocalStorage();
          } 
          tf.loadLayersModel('localstorage://recieps').then((model)=>{
              axios.get("https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/users/products/MDAsyGDYliP00B1LQqjAmZSYUc02").then((response)=>{
                    const listToIngredient = [];
                    for(var i=0; i< response.data.length; i++) {
                        listToIngredient.push(response.data[i].name)   
                    }
                    var input = completeArray(listToIngredient);
                    const valuesTensor = tf.tensor2d(input, [1, 106]);
                    this.food = predict(model, valuesTensor);
              })
          })
      }
  }
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




