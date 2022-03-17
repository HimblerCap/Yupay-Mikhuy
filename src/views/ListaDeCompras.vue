<template>
<v-main fluid class="fixed ml-n8" >
  <!-- Desktop view -->
  <v-container fluid class="mr-n9 hidden-sm-and-down">
    <v-container fluid>
      <h2>Lista de compras</h2>
    </v-container>
    
    <v-container>
        <v-row class="child-flex">
            <v-col cols="12">
              <div class="input-wrapper">
                <input 
                type="search"
                v-model="search"
                placeholder="¿Qué alimento desea añadir?" 
                class="input">
                <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
            </v-col>

            <v-col cols="8">
                <v-card>
                  <v-container>
                    <v-row>
                        <v-col
                          v-for="(item,i) in items"
                          position= relative
                          :key="i"
                          cols="4">
                            <v-card
                            elevation="1"
                            class="mx-auto"
                            >
                              <v-img
                              height="150"
                              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                              ></v-img>

                              <v-card-title class="ma-0" style="padding: 16px 16px 0px 16px">
                                Cafe Badilico
                              </v-card-title>

                              <v-card-text class="ma-0" style="padding: 0px 16px 0px 16px">
                                <div class=" text-subtitle-1">
                                  S/. • Italian, Cafe
                                </div>
                              </v-card-text>

                              <v-card-actions>
                                <v-row align="center" justify="center">
                                  <v-btn
                                    text
                                    color="teal accent-4"
                                    @click="reveal = true"
                                  >
                                    Añadir
                                  </v-btn>
                                </v-row>
                              </v-card-actions>
                              <v-expand-transition>
                                <v-card
                                  v-if="reveal"
                                  class="transition-fast-in-fast-out v-card--reveal"
                                  style="height: 100%;"
                                >
                                  <v-card-text class="pb-0">
                                    <p class="text-h4 text--primary">
                                      Origin
                                    </p>
                                  </v-card-text>
                                  <v-card-actions class="pt-0">
                                    <v-btn
                                      text
                                      color="teal accent-4"
                                      @click="reveal = false"
                                    >
                                      Close
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-expand-transition>
                            </v-card>           
                        </v-col>
                    </v-row>
                  </v-container>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card
                height="400">
                    <h1>Aquí irán  las notas</h1>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </v-container>
  <!-- Desktop view -->

  <!-- Mobile view -->
  <v-container class="ma-0 pa-0 hidden-sm-and-up">
    <v-container fluid>
      <h2>Lista de compras</h2>
    </v-container>
    
    <v-container class="ma-0 pa-0">
      <v-col cols="12" class="pl-0 pr-0">
            <div class="input-wrapper">
              <input 
              type="text"
              v-model="search" 
              placeholder="¿Qué alimento desea añadir?" 
              class="input">
              <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <v-btn-toggle
              v-model="categoryButtons"
              mandatory
              color="amber darken-2"
              class="pt-3 ml-n2"
              group
            >
              <v-btn class="classification-cards" retain-focus-on-click>
                <h6>Carnes</h6>
              </v-btn>

              <v-btn class="classification-cards" @click="setVegetales">
                <h6>Vegetales</h6>
              </v-btn>

              <v-btn class="classification-cards" @click="setFrutas">
                <h6>Frutas</h6>
              </v-btn>

              <v-btn class="classification-cards" @click="setMenestras">
                <h6>Menestras</h6>
              </v-btn>
          </v-btn-toggle>
          
      </v-col>
      <v-row>
          <v-col justify="center" align="center" cols="12" class="pa-0">
            <v-row v-for="(item,i) in items" :key="i">
              <v-col cols="12" class="pa-1">
                <v-card outlined>
                  <v-col cols="11" class="ma-0 pa-0 ">
                    <v-row justify="center" align="center">
                      <v-col cols="3" justify="center" align="center" class="pa-0 pl-1">
                        <v-card class="pa-1" flat>
                          <v-img
                          max-width="70"
                          max-hight="40"
                          :src="item.images[0]"
                          ></v-img>
                        </v-card> 
                      </v-col>
                      <v-col cols="9" class="ma-0 pa-1">
                        <v-row justify="center" align="center">
                          <v-col cols="4" class="pa-0 ml-3">
                            <h5 style="font-family: 'Lato', sans-serif;">{{item.name | capitalize}}</h5>
                          </v-col>
                          <v-col cols="6" class="pa-0 pl-3 ml-3">
                            <v-text-field
                              v-model="item.quantity"
                              label="Peso"
                              suffix="Kg"
                              append-outer-icon="mdi-plus"
                              @click:append-outer="sendMessage"
                            ></v-text-field>                 
                          </v-col>
                          <v-col cols="0" class="pa-0">
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>  
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
    </v-container>
  </v-container>
  <!-- Mobile view -->
</v-main>
</template>

<script>
import { prod } from '@tensorflow/tfjs-core';
import { data } from '@tensorflow/tfjs';
import axios from 'axios';
import {methodToGet} from '../utils/utils.js'

let foodsAll = [];



// let comidas = require('../database/prueba_tottus.json');

// let Fruits = [], Vegetables = [], Stews = [], foodsAll = [];
// 
// for(let i=0; i<comidas.frutas.length;i++){
//   Fruits[i] = comidas.frutas[i];
// }
// for(let j=0; j<comidas.verduras.length;j++){
//   Vegetables[j] = comidas.verduras[j];
// }
// for(let k=0; k<comidas.menestras.length;k++){
//   Stews[k] = comidas.menestras[k];
// }
// foodsAll = foodsAll.concat(Carnes);
// 
// for(let l=0; l<foodsAll.length; l++){
//   foodsAll[l].quantity = ""; 
// }





export default {
  name: 'ListaCompras',
  data () {
    return {
        // Variables para el filtro
        foodsAll,
        search: '',

        // Other variables
        methodToGet,

        // Variables para capturar datos del producto
        products: [],

        // Mostrar V-cards en Desktop
        reveal: false,

        // Mostrar categorias de comida
        categoryButtons: 'center',
      }
    },
    mounted() {
      this.foodsAll = this.methodToGet()
      for(let l=0; l<this.foodsAll.length; l++){
        this.foodsAll[l].quantity = ""; 
      }
    },
    computed: {
      items() {
        return foodsAll.filter(item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase());
        });
      },
    },
    filters: {
          capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
          }
      },
    methods: {
      searchProduct(products, findproduct){
        if(products.length != 0){
          for(let i=0; i<products.length;i++){
            if(Object.values(products[i])[0] === findproduct){
              return [true, i]
            } 
            else{
              return [false, 0]
            }
          }
        }
        else{
          return [false, 0]
        }  
      },
      addProduct(products, m){
        let product = {name: '', quantity_added_now: '', quantity_added_last: ''}
        product.name = foodsAll[m].name
        product.quantity_added_now = Number(foodsAll[m].quantity)
        product.quantity_added_last = Number(product.quantity_added_now)
        products.push(product)
      },
      modifyProduct(products, m, indice){
        products[indice].quantity_added_now = Number(foodsAll[m].quantity)
        products[indice].quantity_added_last = Number(products[indice].quantity_added_now) + Number(products[indice].quantity_added_last)
      },
      sendMessage(){
        let products = this.products        
        for(let m=0; m<this.foodsAll.length;m++){
            if(this.foodsAll[m].quantity){    
              let helper = this.searchProduct(products, foodsAll[m].name)
              if(helper[0]){
                this.modifyProduct(products, m, helper[1])
              }
              else{
                this.addProduct(products, m) 
              }
            } 
        }
        this.clearMessage()        
        console.log(products)
      },
      clearMessage() {
        for(let l=0; l<foodsAll.length; l++){
          foodsAll[l].quantity = ""; 
        }
      },
      setVegetales(){
      },
      setFrutas(){
      },
      setMenestras(){
      }
    },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Sofia&family=Trocchi&display=swap');

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
/* Decoración del input para Mobile */
.input-wrapper {
  position: relative;
  width: 100%;
}
.input {
  color: #191919;
  padding: 10px 10px 10px 10px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #FFC300;
}
.input-icon {
  color: #FFC300;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

/* Personalizando Classification Cards */
/* .classification-cards{
  
} */

/* Agregando las opciones de filtrado */
.filter{
  display: none;
}


</style>