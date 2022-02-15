<template>
<v-main fluid class="fixed ml-n8" >
  <v-container fluid>
    <div fluid>
      <h1>Home</h1>
      <v-container class="ma-0 pa-0 fixed_overlap">
        <v-carousel
        cycle
        height="300"
        max="500px"
        hide-delimiter-background
        show-arrows-on-hover>
          <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i">
            <v-sheet
            :color="colors[i]"
            height="100%">
              <v-row
              class="fill-height"
              align="center"
              justify="center">
                <div class="text-h2">
                  {{ slide }} Slide
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </div>
  </v-container>
</v-main>
   
</template>

<script>
let RM = null;

fetch("https://rickandmortyapi.com/api/character/91")
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        RM = data;
    })

export default {
  name: 'Home',
  data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
}
</script>
<style>
  .fixed{
    left: 0 !important;
  }
  .fixed_overlap{
    position: sticky;
    margin-right: 200px !important;
    max-width: 800px;
  }
</style>

