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
                          v-for="(food, i) in foods"
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
          <v-autocomplete
          background-color="#A1B57D50"
          style="border-radius: 10px"
          filled
          solo
          v-model="selectMob"    
          flat
          :loading="loadingMob"
          :search-input.sync="searchMob"
          :items="items"
          
          hide-no-data
          hide-details
          label="¿Qué alimento desea añadir?"

          ></v-autocomplete>
      </v-col>
      <v-row>
          <v-col  justify="center" align="center" cols="12" class="pa-0">
            <v-col 
            cols="12"
            class="pa-1"
            v-for="(food, i) in foods"
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
                          v-model="cantidad"
                          label="Peso"
                          suffix="Kg"
                          :append-outer-icon="mdi-plus"
                          @click:append-outer="addCantidad"
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
for(let i = 0; i<comidas.length ;i++){
  foods[i] = comidas[i].nombre;
}



export default {
  name: 'Lista de compras',
  data () {
    return {

        //Autocomplete
        loadingDes: false,
        loadingMob: false,
        searchDes: null,
        searchMob: null,
        selectDes: null,
        selectMob:null,
        items: [],
        foods,
        comidas,

        //Show V-cards
        reveal: false,
      }
    },

    watch: {
      searchDes (val) {
        val && val !== this.select && this.querySelections(val)
      },
      searchMob (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loadingDes = true
        this.loadingMob =true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.foods.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loadingDes = false
          this.loadingMob = false
        }, 500)
      },
    },
    
}
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}


</style>