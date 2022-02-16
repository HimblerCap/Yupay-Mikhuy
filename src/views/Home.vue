<template >
<v-main fluid class="fixed ml-n8"  >
  <v-container fluid class="mr-n9" >
    <v-container fluid>
      <h1 style="text-align:center" class="">Home</h1>
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
  </v-container>
</v-main>
   
</template>

<script>
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
  .add-margin{
    margin: auto !important;
  }

</style>

