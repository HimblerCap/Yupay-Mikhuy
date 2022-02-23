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
                    background-color="#EEEEEE"
                    filled
                    solo
                    v-model="select"    
                    flat
                    :search-input.sync="search"
                    :items="items"
                    
                    hide-no-data
                    hide-details

                    label="¿Qué alimento desea añadir?"
                    ></v-autocomplete>
                </v-card>
            </v-col>

            <v-col cols="7">
                <v-card>
                    <v-row>
                        <v-col cols="12">
                          <p>Hola a todo el mundo</p>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card
                height="400">

                  <!--Sección encontrada en internet para listar v-card-->
                  
                  <!--Sección encontrada en internet para listar v-card-->
                </v-card>
            </v-col>
            <v-col cols="5">
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
let comidas = null;

fetch('../database/db.json')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });


export default {
  name: 'Lista de compras',
  data () {
    return {
        search: null,
        select: null,
        items: [],
        food: ['Pollo', 'Chancho', 'Pescado', 'Zanahoria', 'Lechuga'],

        comidas,
        alimentos: [],

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
          this.items = this.food.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
    
}
</script>
<style>
    
</style>