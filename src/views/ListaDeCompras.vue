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
                    hide-no-data
                    v-model="value"
                    :item="items"
                    label="¿Qué alimento desea añadir?"
                    ></v-autocomplete>
                </v-card>
            </v-col>
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
let foodName = null;

fetch("../database/provisional.json")
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        foodName = data;
    })

export default {
  name: 'Lista de compras',
  data () {
      return {
        foodName,
        items: ['pollo', 'chancho', 'pescado', 'zanahoria'],
        value: null,
      }
  }
}
</script>
<style>
    
</style>