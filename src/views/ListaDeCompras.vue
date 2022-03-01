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
                
                    <v-autocomplete
                    background-color="#A1B57D50"
                    style="border-radius: 10px"
                    filled
                    solo
                    v-model="selectDes"    
                    flat
                    :loading="loadingDes"
                    :search-input.sync="searchDes"
                    :items="items"
                    
                    hide-no-data
                    hide-details

                    label="¿Qué alimento desea añadir?"
                    prepend-inner-icon="mdi-magnify"
                    ></v-autocomplete>
            </v-col>

            <v-col cols="8">
                <v-card>
                  <v-container>
                    <v-row>
                        <v-col
                          v-for="(food,i) in foods"
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
            type="search" 
            placeholder="¿Qué alimento desea añadir?" 
            class="input">
            <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <v-btn-toggle
            v-model="category"
            mandatory
            color="amber darken-2"
            class="pt-2 ml-n2"
            group
          >
            <v-btn class="classification-cards" retain-focus-on-click	>
              <v-icon>
                
              </v-icon>
              <h6>Todo</h6>
            </v-btn>
    
            <v-btn>
              <h6>Vegetales</h6>
            </v-btn>
    
            <v-btn>
              <h6>Frutas</h6>
            </v-btn>
              
            <v-btn>
              <h6>Carnes</h6>
            </v-btn>
          </v-btn-toggle>
      </v-col>
      <v-row>
          <v-col  justify="center" align="center" cols="12" class="pa-0">
            <v-col 
            cols="12"
            class="pa-1"
            v-for="(food,i) in foods"
            position= relative
            :key="i">
              <v-card outlined>
                <v-col cols="11" class="ma-0 pa-0 ">
                  <v-row justify="center" align="center">
                    <v-col cols="3" justify="center" align="center" class="pa-0 pl-1">
                    <v-card class="pa-1" flat>
                      <v-img
                      max-width="70"
                      max-hight="40"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                      ></v-img>
                    </v-card> 
                  </v-col>
                  <v-col cols="9" class="ma-0 pa-1">
                    <v-row justify="center" align="center">
                      <v-col cols="4" class="pa-0">
                        <v-subheader>Italian, Cafe</v-subheader>
                      </v-col>
                      <v-col cols="7" class="pa-0">
                        <v-text-field
                          v-model="amount"
                          label="Peso"
                          suffix="Kg"
                          append-outer-icon="mdi-plus"
                          @click:append-outer="sendMessage"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="1" class="pa-0">

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

let comidas = require('../database/db.json');

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

let foods = [];
let imgs = [];

for(let i = 0; i<comidas.length ;i++){
  foods[i] = comidas[i].nombre;
  imgs[i] = comidas[i].img;
}



export default {
  name: 'ListaCompras',
  data () {
    return {

        // Variables para el Autocomplete en Descktop
        loadingDes: false,
        searchDes: null,
        selectDes: null,

        // Variables a guardar en el JSON MisAlimentos
        amount: null,

        // Extracción de datos del JSON
        comidas,
        items: [],
        foods,
        imgs,

        // Mostrar V-cards en Desktop
        reveal: false,

        //Mostrando categorias por comida
        category: 'center',
      }
    },

    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },

    },
    methods: {
      querySelections (v) {
        this.loadingDes = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.foods.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loadingDes = false
        }, 500)
      },

      sendMessage () {
        //Aqui va el método para añadir los productos a las lista de de comidas personales
      },

      searchFilters(input, selector){
        //Aquí va el método para filtrar los alimentos
      }
    },
    
}
</script>
<style>

/* Decoración del input para Mobile */
.input-wrapper {
  position: relative;
  width: 100%;
}
.input {
  color: #191919;
  padding: 10px 10px 10px 35px;
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
  left: 12px;
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