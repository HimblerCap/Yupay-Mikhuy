<template>
<v-main fluid class="fixed ml-n8" >


  <!--Desktop-->


  <v-container fluid class="mr-n9 hidden-sm-and-down">
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
              width="320"
              height="380">
                <div class="d-flex flex-no-wrap justify-space-between ">
              <div>
                <v-card-title
                  class="text-h5 pb-2 titledesk"
                  
                >{{item.tipo}}</v-card-title> 

                <v-card-subtitle class="mt-1 subtitledesk">{{item.name}}</v-card-subtitle>
              </div>

                <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.images[0]"
                max-width="100"
                
                ></v-img>
              </v-avatar>


              </div>

              <div>
                <v-card
                class="align-center justify-center"
                 tile
                 elevation="0"
                 color="#F3C892">
                    <v-card-text class="textdesk ">Inventario:  {{item.cantidad}} {{item.unidad}} de {{item.name}}  </v-card-text>
                </v-card>

              </div>
              <v-alert v-if="item.cant_dias > 5" 
              
              
                    
                type="error"
                color = "red"
                dense
                class="mx-1 mt-2"
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

  <!--MOBILE-->

  <v-container class="ma-0 pa-0 hidden-sm-and-up">


    <v-container fluid>
      <h2>Mis alimentos</h2>
    </v-container>
    
    <v-container class="ma-0 pa-0">
      <v-col cols="12" class="pl-0 pr-0">
          
          <v-btn-toggle
            v-model="categoryButtons"
            mandatory
            color="amber darken-2"
            class="pt-2 ml-n2"
            group
          >
            <v-btn class="classification-cards" retain-focus-on-click	>
              <h6>Todos</h6>
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
      <!--
      <v-row>
          <v-col  justify="center" align="center" cols="12" class="pa-0">
            <v-col 
            cols="12"
            class="pa-1"
            v-for="(food,i) in foodsAll"
            :href="food.href"
            position= relative
            :key="i">
              <v-card outlined>
                <v-col cols="11" class="ma-0 pa-0 ">
                  <v-row justify="center" align="center">
                    <v-col cols="3" justify="center" align="center" class="pa-0 pl-1">
                    <v-card class="pa-1" flat>
                      <v-img
                      max-width="70"
                      max-height="40"
                      :src="food.images[0]"
                      ></v-img>
                    </v-card> 
                  </v-col>
                  <v-col cols="9" class="ma-0 pa-1">
                    <v-row justify="center" align="center">
                      <v-col cols="4" class="pa-0 ml-3">
                          <h5 style="font-family: 'Lato', sans-serif;">{{food.name}}</h5>
                      </v-col>
                      
                    </v-row>
                  </v-col>
                  </v-row>
                </v-col>  
              </v-card>
            </v-col>
          </v-col>
        </v-row>
        -->
        <v-row class="align-content-lg ma-0 pa-0"
        v-for="(item, i) in items"
          :key="i"
        
        >
          <v-card
          width="100%"
          min-height="100px"
          class="pa-2 my-2">
            <div class="d-flex flex-no-wrap justify-start align-center"  >
            <v-avatar
             class="ma-0"
                size="100"
                tile>
              <v-img :src="item.images[0]"
              max-width="100"
              max-height="100"
              >
                
              </v-img>

              
            </v-avatar>
            <div>
              <v-card-title
                  class="ma-0 pa-0 titlemob "
                  
                >
                {{item.tipo}} <v-spacer></v-spacer> 
                <v-icon v-show="item.cant_dias > 5" 
                  dark color="#FF891C" 
                  large>
                  mdi-alert
                  </v-icon>
                
                </v-card-title> <!-- item.tipo -->

                <v-card-subtitle 
                class="ma-0 pa-0 subtitlemob" v-text="item.name"></v-card-subtitle>
                <v-card-text  class="textmob" >Inventario: 3 kg de {{item.name}}</v-card-text>

                <div align = "center">
                  <v-card-actions>
                <v-btn
                v-model= "item.statu"
                    small
                depressed
                color="#C4C4C4"
                @click="editar(i)"
                >
                    MÁS INFORMACIÓN
                </v-btn>
                </v-card-actions>


                <v-expand-transition>
                    <v-card
                      v-if="item.statu == false"
                      width="100%"
                      height="100%"
                      class="py-2 px-1 ma-0  transition-fast-in-fast-out v-card--reveal d-flex flex-column align-center"
                    >
                    <div class="ma-0 pa-0 backstyle " >
                      
                      <v-card-text class="py-0 textmob ">
                        <v-row>
                          <v-col class="py-1 ">
                            Penúltimo ingreso:
                          </v-col>

                          <v-col class="py-1 ">
                            {{item.penultimo_ingreso}}
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col class="py-1 ">
                            Último ingreso:
                          </v-col>

                          <v-col class="py-1 ">
                            {{item.ultimo_ingreso}}
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col class="py-1 ">
                            Número de días:
                          </v-col>

                          <v-col class="py-1 ">
                            {{item.cant_dias}}
                          </v-col>
                        </v-row>
                        
                        
                      </v-card-text>
                      
                      


                      </div>
                      <v-card-actions class="pa-0">
                        <v-container class="align-center justify-center">
                        <v-btn
                          
                          small
                          depressed
                          color="#C4C4C4"
                          @click="editar(i)"

                          
                
                
                        >
                          CERRAR
                        </v-btn>
                        </v-container>
                      </v-card-actions>
                    </v-card>
    </v-expand-transition>

                </div>
            </div>

            </div>

          </v-card>
        </v-row>


    </v-container>

  </v-container>
</v-main>
</template>


<script>

let comidas = require('../database/prueba_tottus.json');

let foodsAll = [], namesAll = [], imgsAll = [];
let Fruits = [], Vegetables = [], Stews = [];

for(let i=0; i<comidas.frutas.length;i++){
  Fruits[i] = comidas.frutas[i];
}
for(let j=0; j<comidas.verduras.length;j++){
  Vegetables[j] = comidas.verduras[j];
}
for(let k=0; k<comidas.menestras.length;k++){
  Stews[k] = comidas.menestras[k];
}
foodsAll = Fruits.concat(Vegetables);
foodsAll = foodsAll.concat(Stews);



var show =['Penultimo ingreso', 'Ultimo ingreso', 'numero de dias'];
let items= [
        {
          name: 'Melon coquito',
          images: ["https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-XcryIxSn.jpg"],
          tipo: "Fruta",

          cantidad: 3.5,
          unidad: "Kg",
          
          ultimo_ingreso: "fechaayer",
          penultimo_ingreso: "fehcaanteayer",
          cant_dias: 1,
          statu: true,
        },
        {
          name: 'maracuy\u00e1',
          images: [ "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42259096-dyeLeJHM.jpg"],
          tipo: "Fruta",

          cantidad: 7,
          unidad: "Un",
          
          ultimo_ingreso: "fechaayer",
          penultimo_ingreso: "fehcaanteayer",
          cant_dias: 10,
          statu: true,
        },
      ];




  export default {
    data: () => ({
      show,
      items,
      
      amount: null,

        // Extracción de datos del JSON
        comidas,
     
        foodsAll,
        imgsAll,
        namesAll,

        

    }
    
    
    
    
    
    ),



    methods: {

      sendMessage () {
        //Aqui va el método para añadir los productos a las lista de de comidas personales
      },
      searchFilters(input, selector){
        //Aquí va el método para filtrar los alimentos
      },
      editar: function (i){
        this.items[i].statu =!this.items[i].statu;
        
      }
      
    },
  }
</script>


<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  left: 0;
  width: 100%;
}
.titlemob {
  font-style:italic !important;
  font-weight: 300 !important;
  font-size: 1.25rem;
}

.subtitlemob{
  font-weight: 700 !important;
  font-size: 1.45rem;
  color: black !important;
}


.titledesk {
  font-style:italic !important;
  font-weight: 300 !important;
  font-size: 1.45rem;
}

.subtitledesk{
  font-weight: 700 !important;
  font-size: 1.65rem;
  color: black !important;
}


.textmob{
  margin: 0 !important; 
  padding: 8px 0px  !important;
  font-size: 0.975rem !important;
  
}

.textdesk{
  margin: 0 !important; 
  padding: 8px 0px  !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  
}
.backstyle{
  width: 100% !important;
  align-items: center;
  align-self: center;
}

</style>