<template>
<v-main fluid class="fixed ml-n8" >
    <span class="bg"></span>
  <v-container fluid class="mr-n9">
    <v-container fluid>
      <h1>Lista de compras</h1>
    </v-container>
    
    <v-container>
        <v-row class="child-flex">
            <v-col cols="12">
                <v-card 
                flat
                >
                    <v-autocomplete
                    background-color="#A1B57D50"
                    style="border-radius: 10px"
                    filled
                    solo
                    v-model="select"    
                    flat
                    :loading="loading"
                    :search-input.sync="search"
                    :items="items"
                    
                    hide-no-data
                    hide-details

                    label="¿Qué alimento desea añadir?"
                    ></v-autocomplete>
                </v-card>
            </v-col>

            <v-col cols="8">
                <v-card
                height="400">
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
        loading: false,
        search: null,
        select: null,
        items: [],
        foods,
        comidas,

        //Show V-cards
        reveal: false,
      }
    },

    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.foods.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
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