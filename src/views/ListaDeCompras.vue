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
                          v-for="(food,i) in foodsAll"
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
              id="searchProduct" 
              placeholder="¿Qué alimento desea añadir?" 
              class="input">
               <v-btn
                icon
                class="input-icon"
                color="#FFC300"
                id="button"
               >
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </div>
            <v-btn-toggle
              v-model="categoryButtons"
              mandatory
              color="amber darken-2"
              class="pt-3 ml-n2"
              group
            >
              <v-btn class="classification-cards" retain-focus-on-click	>
                <h6>Todo</h6>
              </v-btn>

              <v-btn>
                <h6>Vegetales</h6>
              </v-btn>

              <v-btn>
                <h6>Frutas</h6>
              </v-btn>

              <v-btn>
                <h6>Menestras</h6>
              </v-btn>
          </v-btn-toggle>
          
      </v-col>
      <v-row>
          <v-col  justify="center" align="center" cols="12" class="pa-0">
            <v-col 
            cols="12"
            class="pa-1"
            v-for="(food,i) in foodsAll"
            :key="i"
            position=relative
            >
              <v-card outlined>
                <v-col cols="11" class="ma-0 pa-0 ">
                  <v-row justify="center" align="center">
                    <v-col cols="3" justify="center" align="center" class="pa-0 pl-1">
                    <v-card class="pa-1" flat>
                      <v-img
                      max-width="70"
                      max-hight="40"
                      :src="food.images[0]"
                      ></v-img>
                    </v-card> 
                  </v-col>
                  <v-col cols="9" class="ma-0 pa-1">
                    <v-row justify="center" align="center">
                      <v-col cols="4" class="pa-0 ml-3">
                          <h5 style="font-family: 'Lato', sans-serif;">{{food.name | capitalize}}</h5>
                      </v-col>
                      <v-col cols="6" class="pa-0 pl-3 ml-3">
                        <v-text-field
                          v-model="amount"
                          label="Peso"
                          :key="i"
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
          </v-col>
        </v-row>
    </v-container>
  </v-container>
  <!-- Mobile view -->
</v-main>
</template>

<script>

// let comidas = null;
// fetch('https://rickandmortyapi.com/api/character/137')
//           .then( res => {
//             return res.json();
//           })
//           .then((data) => {
//             comidas = data;
//           })
//           .catch((err) => {
//             console.log(err);
//           });

let comidas = require('../database/prueba_tottus.json');

let foodsAll = [], namesAll = [], imgsAll = [];
let Fruits = [], Vegetables = [], Stews = [];

for(let i=0; i<comidas.frutas.length;i++){
  Fruits[i] = comidas.frutas[i];
}
for(let j=0; j<comidas.verduras.length;j++){
  Vegetables[j] = comidas.verduras[j];
}
for(let k=0; k<comidas.menestras.length;k++){
  Stews[k] = comidas.menestras[k];
}
foodsAll = foodsAll.concat(Fruits)
foodsAll = foodsAll.concat(Vegetables);
foodsAll = foodsAll.concat(Stews);

const formulario = document.getElementsByClassName('#searchProduct');
const boton = document.getElementsByClassName("#button");
const filtrar = function(){
  console.log(formulario.value);  
  }



export default {
  name: 'ListaCompras',
  data () {
    return {
        // Variables extraidas del JSON
        comidas,
        foodsAll,
        imgsAll,
        namesAll,

        // Variables a guardar en el JSON MisAlimentos
        amount: null,

        // Variables del Filtro en tiempo real 
        formulario,
        boton,
        filtrar,

        // Mostrar V-cards en Desktop
        reveal: false,

        // Mostrar categorias de comida
        categoryButtons: 'center',
      }
    },
    methods: {
      sendMessage () {
        //Aqui va el método para añadir los productos a las lista de de comidas personales
      },
      filtrarElementos(){
                
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
}
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
.classification-cards{
  
}

/* Agregando las opciones de filtrado */
.filter{
  display: none;
}


</style>