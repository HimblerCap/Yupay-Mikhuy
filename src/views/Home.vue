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

      <v-container>
        <v-row >
          <v-col >

              <v-card
              class="mx-auto"
              max-width="344"
              >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Top western road trips {{index}}.{{item}}
              </v-card-title>

              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>                         
  
          </v-col>


                          

          
          <v-col>

            <v-card
              class="mx-auto"
              max-width="344"
              >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Top western road trips
              </v-card-title>

              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show2 = !show2"
                >
                  <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show2">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card> 



          </v-col>
          
          
          <v-col>

              <v-card
              class="mx-auto"
              max-width="344"
              >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Top western road trips
              </v-card-title>

              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show3 = !show3"
                >
                  <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show3">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card> 



          </v-col>


          <v-col>

              <v-card
              class="mx-auto"
              max-width="344"
              >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Top western road trips
              </v-card-title>

              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show4 = !show4"
                >
                  <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show4">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card> 

          </v-col> 

        </v-row>


      </v-container>


  </v-container>
</v-main>
   
</template>

<script>
export default {
  name: 'Home',
  data () {
      return {
        show: false,
        show2: false,
        show3: false,
        show4: false,
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

