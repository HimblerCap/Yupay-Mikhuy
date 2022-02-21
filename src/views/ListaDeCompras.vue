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
                    color="white"
                    background-color="#EEEEEE"
                    filled
                    solo
                    v-model="select"
                    
                    :loading="loading"
                    flat
                    :search-input.sync="search"
                    :items="items"
                    
                    hide-no-data
                    hide-details

                    label="¿Qué alimento desea añadir?"
                    ></v-autocomplete>
                </v-card>
            </v-col>

            <!--Sección de prueba, listado del fetch-->
            <v-col cols="12" height="400px">
              <button @click="getComidas">Get Comidas</button>
              <ul>
                <li v-for="comida in comidas" :key="comida.id">
                  {{comida.nombre}}
                </li>
              </ul>
            </v-col>
            <!--Sección de prueba, listado del fetch-->

            <v-col cols="7">
                <v-card
                v-for="(alimento,i) in alimentos"
                :key="i">
                    <v-row>
                        <v-col>

                        </v-col>
                    </v-row>
                </v-card>
                <v-card
                height="400">
                <h1>Aqui se listarán los alimentos</h1>
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
export default {
  
  name: 'Lista de compras',
  data () {
    return {
        loading: false,
        search: null,
        select: null,
        items: [],
        food: ['Pollo', 'Chancho', 'Pescado', 'Zanahoria', 'Lechuga'],
        comidas: [],
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
      getComidas(){
        fetch("../database/provisional.json")
          .then((response)=> {
            return response.json();
          })
          .then((data)=> {
            this.comidas = data;
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
}
</script>
<style>
    
</style>