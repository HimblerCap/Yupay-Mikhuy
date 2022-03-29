<template>
<v-main fluid class="fixed ml-n8" >


  <!--Desktop-->


  <v-container fluid class="mr-n9 hidden-sm-and-down">
    <v-container fluid>
      <h1>Tus alimentos </h1>
    </v-container>

    
    <v-container>
       <v-row>
           <v-col 
            v-for="(item, i) in myproducts"
          :key="i"
          cols="auto">

            <v-card class="mx-auto"
              width="320"
              height="380">
                <div class="d-flex flex-no-wrap justify-space-between ">
              <div>
                <v-card-title
                  class="text-h5 pb-2 titledesk"
                  
                >{{item.type}}</v-card-title> 

                <v-card-subtitle class="mt-1 subtitledesk">{{item.name}}</v-card-subtitle>
              </div>

                <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.images"
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
                    <v-card-text class="textdesk ">Inventario:  {{item.quantity}} Kg de {{item.name}}  </v-card-text>
                </v-card>

              </div>
              <v-alert v-if="item.days > 5" 
              
              
                    
                type="error"
                color = "red"
                dense
                class="mx-1 mt-2"
                >
                La {{item.type}} tiene {{item.days}} días almacenada.
                  
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
                       {{item.quantity}} Kg
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

  <v-container class="ma-0 pa-0 hidden-sm-and-up" v-if=" myproducts !== null">


    <v-container fluid>
      <h3>Mis alimentos {{prueba()}}</h3>
    </v-container>
    
    <v-container class="ma-0 pa-0" >
      <!--
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
      -->
        <v-row class="align-content-lg ma-0 pa-0"
        v-for="(item, i) in myproducts"
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
              <v-img :src="item.images"
              max-width="100"
              max-height="100"
              >    
              </v-img>

              
            </v-avatar>
            <div>
              <v-card-title class="ma-0 pa-0 titlemob ">
                {{item.type | capitalize}} 
                <v-spacer></v-spacer> 
                <v-icon v-show="item.days > 5" 
                  dark color="#FF891C" 
                  large>
                  mdi-alert
                  </v-icon>
                
                </v-card-title> <!-- item.tipo -->

                <v-card-subtitle class="ma-0 pa-0 subtitlemob">{{item.name | capitalize}}</v-card-subtitle>
                <v-card-text  class="textmob" >Inventario: {{item.quantity}} kg </v-card-text>
                
                <v-card-text  class="textmob pa-0" >Penúltimo ingreso:  {{item.product_added_last}} </v-card-text>
                <v-card-text  class="textmob pa-0" >Último ingreso: {{item.product_added_now}} </v-card-text>
                <v-card-text  class="textmob pa-0" >Número de días: {{item.days}} </v-card-text>
                <!--
                  <v-card-actions>
                    <v-btn
                    v-model="item.state"
                    small
                    depressed
                    color="green lighten-2"
                    @click="showCard(i)"
                    >
                        MÁS INFORMACIÓN
                    </v-btn>
                  </v-card-actions>


                <v-expand-transition>
                  <v-card
                    v-if="item.state==false"
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
                            {{item.product_added_last}}
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col class="py-1 ">
                            Último ingreso:
                          </v-col>
                          <v-col class="py-1 ">
                            {{item.product_added_now}}
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col class="py-1 ">
                            Número de días:
                          </v-col>
                          <v-col class="py-1 ">
                            {{item.days}}
                          </v-col>
                        </v-row>             
                      </v-card-text>                  
                    </div>

                    <v-card-actions class="pa-0">
                      <v-container class="align-center justify-center">
                        <v-btn              
                          small
                          depressed
                          color="green lighten-2"
                          @click="showCard(i)"
                        >
                          CERRAR
                        </v-btn>
                      </v-container>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
                -->
                </div>
            
            </div>
          </v-card>
        </v-row>
    </v-container>
  </v-container>
</v-main>
</template>


<script>
import axios from 'axios'
var rpta, myproducts, response ,aux2;


var items= [
        {
          name: 'Melon coquito',
          images: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-XcryIxSn.jpg",
          type: "Fruta",

          quantity: 3.5,
          
          
          product_added_now: "fechaayer",
          product_added_last: "fehcaanteayer",
          days: 1,
          state: true,
        },
        {
          name: 'maracuy\u00e1',
          images: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42259096-dyeLeJHM.jpg",
          type: "Fruta",

          quantity: 7,
          
          
          product_added_now: "fechaayer",
          product_added_last: "fehcaanteayer",
          days: 10,
          state: true,
        },
      ];


  export default {
    data: () => ({
      dataReady: false,
      items,
      rpta,
      myproducts : null,
      categoryButtons: 'center',
      amount: null,
    }),
    methods: {
      showCard(i){
        this.myproducts[i].state = !this.myproducts[i].state;  
        console.log(this.myproducts[i]);
      },
      prueba(){
        console.log(this.myproducts);
        console.log(this.items);
      },
      
    },
    async created() {
      let response = await axios.get("https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/users/products/4sWLSpmKTZUzOspVmy2vA3L4jgt2");
      this.myproducts = response.data;
      
      let date = new Date();
      let divi = 1000*60*60*24;
      let aux;
        for(let l=0; l<this.myproducts.length; l++){
          
          aux = new Date(this.myproducts[l].product_added_now);
          
          this.myproducts[l].state = true; 
          this.myproducts[l].days = Math.floor((date.getTime() - aux.getTime())/(divi));

          if(this.myproducts[l].product_added_last == ""){
            this.myproducts[l].product_added_last = "--";
          }
        }
        
      },
    

    filters: {
          capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
          }
    }
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