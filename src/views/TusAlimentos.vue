<template>
<v-main fluid class="fixed ml-n8" >
  <v-container fluid class="mr-n9">
    <v-container fluid>
      <h1>Tus alimentos</h1>
    </v-container>

    
    <v-container>
       <v-row>
           <v-col 
            v-for="(item, i) in items"
          :key="i"
          cols="auto">

            <v-card class="mx-auto"
              max-width="344"
              min-width="300">
                <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.tipo"
                ></v-card-title>

                <v-card-subtitle v-text="item.name"></v-card-subtitle>
              </div>

                <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.images"></v-img>
              </v-avatar>


              </div>

              <div>
                <v-card color="#F3C892">
                    <v-card-text>Inventario: {{item.cantidad}} {{item.unidad}} de {{item.name}}  </v-card-text>
                </v-card>

              </div>

              <v-alert v-if="item.cant_dias > 5"
              
                    
                type="error"
                color = "red"
                dense
                class="mx-2 mt-4"
                >
                La {{item.tipo}} tiene {{item.cant_dias}} días almacenada.
                  
              </v-alert>

                <v-row align="center" justify="center" class= "my-4">
                    <v-btn
                    color="#F3C892"
                    elevation="2"
                    rounded
                    x-small
                    class="pa-1 mx-2"
                    >
                        <v-icon dark>
                          mdi-minus
                        </v-icon>
                    </v-btn>

                    <v-card>
                       {{item.cantidad}} {{item.unidad}}
                    </v-card>

                    <v-btn
                    color="#F3C892"
                    elevation="2"
                    rounded
                    x-small
                    class="pa-1 mx-2"
                    >
                        <v-icon dark>
                          mdi-plus
                        </v-icon>
                    </v-btn>

                    
                    <v-btn
                    depressed
                    color="#C4C4C4">
                        Actualizar
                    </v-btn>                    
                </v-row>

                <v-row
                class="pa-0 ma-2"
                justify="center"

                >
                    <v-btn
                    large
                depressed
                color="#C4C4C4"
                >
                    MÁS INFORMACIÓN
                </v-btn>
                </v-row>
                

            </v-card>


           </v-col>


        </v-row> 

    </v-container>
        


    

  </v-container>
</v-main>
</template>


<script>
  export default {
    data: () => ({
      items: [
        {
          name: 'Melon coquito',
          images: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-XcryIxSn.jpg",
          tipo: "Fruta",

          cantidad: 3.5,
          unidad: "Kg",
          
          ultimo_ingreso: "fechaayer",
          penultimo_ingreso: "fehcaanteayer",
          cant_dias: 1,
        },
        {
          name: 'maracuy\u00e1',
          images: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42259096-dyeLeJHM.jpg",
          tipo: "Fruta",

          cantidad: 7,
          unidad: "Un",
          
          ultimo_ingreso: "fechaayer",
          penultimo_ingreso: "fehcaanteayer",
          cant_dias: 10,
        },
      ],
    }),
  }
</script>