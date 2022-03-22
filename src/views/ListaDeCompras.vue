<template>
<v-main fluid class="fixed ml-n8" >
  <!-- Desktop view -->
  <v-container fluid class="mr-n9 hidden-sm-and-down">
    <v-container fluid>
      <h2>Lista de compras</h2>
    </v-container>
    
    <v-container>
        <v-row class="child-flex">
            <v-col cols="12">
              <div class="input-wrapper">
                <input 
                type="search"
                v-model="search"
                placeholder="¿Qué alimento desea añadir?" 
                class="input">
                <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
            </v-col>

            <v-col cols="8">
                <v-card>
                  <v-container>
                    <v-row>
                        <v-col
                          v-for="(item,i) in items"
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
  <!-- Desktop view -->

  <!-- Mobile view -->
  <v-container class="ma-0 pa-0 hidden-sm-and-up">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="9" class="pt-2 pb-2" justify="start" align="start">
          <h3>Productos del mercado</h3>
        </v-col>
        <v-col cols="3" class="pt-2 pb-2 " justify="end" align="end">
          <v-dialog
          v-model="dialog"
          persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                elevation="1"
                fab
                small
                dark
                color="orange darken-1"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon dark>
                  mdi-cart-outline
                </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h6">
                Lista de compras
              </v-card-title>
              <v-card-text>
                <div class="lists">
                    <ul>
                        <li 
                        v-for="(product, i) in products" 
                        :key="i">
                          {{ product.name | capitalize}}
                          <span class="confirmProduct"> {{ product.quantity_added_last}} Kg</span>
                        </li>
                    </ul>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false"
                >
                  Cerrar
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="confirmPorduct"
                >
                  Confirmar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
    
    <v-container class="ma-0 pa-0">
      <v-col cols="12" class="pl-0 pr-0">
            <div class="input-wrapper">
              <input 
              type="text"
              v-model="search" 
              placeholder="¿Qué alimento desea añadir?" 
              class="input">
              <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <v-btn-toggle
              v-model="categoryButtons"
              mandatory
              color="amber darken-2"
              class="pt-3 ml-n2"
              group
            >
              <v-btn class="classification-cards" retain-focus-on-click @click="setCarnes">
                <h6>Carnes</h6>
              </v-btn>

              <v-btn class="classification-cards" @click="setVegetales">
                <h6>Vegetales</h6>
              </v-btn>

              <v-btn class="classification-cards" @click="setFrutas">
                <h6>Frutas</h6>
              </v-btn>

              <v-btn class="classification-cards" @click="setMenestras">
                <h6>Menestras</h6>
              </v-btn>
          </v-btn-toggle>
          
      </v-col>
      <v-row>
          <v-col justify="center" align="center" cols="12" class="pa-0">
            <v-row v-for="(item,i) in items" :key="i">
              <v-col cols="12" class="pa-1">
                <v-card outlined>
                  <v-col cols="11" class="ma-0 pa-0 ">
                    <v-row justify="center" align="center">
                      <v-col cols="3" justify="center" align="center" class="pa-0 pl-1">
                        <v-card class="pa-1" flat>
                          <v-img
                          max-width="70"
                          max-hight="40"
                          :src="item.images[0]"
                          ></v-img>
                        </v-card> 
                      </v-col>
                      <v-col cols="9" class="ma-0 pa-1">
                        <v-row justify="center" align="center">
                          <v-col cols="4" class="pa-0 ml-3">
                            <h5 style="font-family: 'Lato', sans-serif;">{{item.name | capitalize}}</h5>
                          </v-col>
                          <v-col cols="6" class="pa-0 pl-3 ml-3">
                            <v-text-field
                              v-model="item.quantity"
                              label="Peso"
                              suffix="Kg"
                              append-outer-icon="mdi-plus"
                              @click:append-outer="sendMessage"
                            ></v-text-field>                 
                          </v-col>
                          <v-col cols="0" class="pa-0">
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>  
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
    </v-container>
  </v-container>
  <!-- Mobile view -->
</v-main>
</template>

<script>
import { prod } from '@tensorflow/tfjs-core';
import { data } from '@tensorflow/tfjs';
import axios from 'axios';


export default {
  name: 'ListaCompras',
  data () {
    return {
        // Variables para el filtro
        foodsAll: [],
        search: '',

        // Variables para capturar datos del producto
        products: [],
        productsToSend: [],
        //Other variables
        dialog: false,

        // Mostrar V-cards en Desktop
        reveal: false,

        // Mostrar categorias de comida
        categoryButtons: 'center',
      }
    },
    mounted() {
      axios.get("https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/products/carnes")
      .then(response => {
        this.foodsAll = response.data
        for(let l=0; l<this.foodsAll.length; l++){
          this.foodsAll[l].quantity = ""; 
          this.foodsAll[l].type = "carnes";
        }   
      })     
      },
    computed: {
      items() {
          return this.foodsAll.filter(item => {
            return item.name.toLowerCase().includes(this.search.toLowerCase());
          })
      
      },
    },
    filters: {
          capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
          }
      },
    methods: {
      searchProduct(products, findproduct){
        if(products.length != 0){
          for(let i=0; i<products.length;i++){
            if(Object.values(products[i])[0] === findproduct){
              return [true, i]
            } 
            else{
              return [false, 0]
            }
          }
        }
        else{
          return [false, 0]
        }  
      },
      addProduct(products, m){
        let product = {name: '', quantity_added_now: '', quantity_added_last: '', type:"", images:""}
        product.images = this.foodsAll[m].images[0]
        product.name = this.foodsAll[m].name
        product.type = this.foodsAll[m].type
        product.quantity_added_now = Number(this.foodsAll[m].quantity)
        product.quantity_added_last = Number(product.quantity_added_now)
        products.push(product)
      },
      modifyProduct(products, m, indice){
        products[indice].quantity_added_now = Number(this.foodsAll[m].quantity)
        products[indice].quantity_added_last = Number(products[indice].quantity_added_now) + Number(products[indice].quantity_added_last)
      },
      sendMessage(){
        let products = this.products     
        for(let m=0; m<this.foodsAll.length;m++){
            if(this.foodsAll[m].quantity){    
              let helper = this.searchProduct(products, this.foodsAll[m].name)
              if(helper[0]){
                this.modifyProduct(products, m, helper[1])
              }
              else{
                this.addProduct(products, m) 
              }
            } 
        }     
        this.clearMessage()  
      },
      clearMessage() {
        console.log(this.products)
        for(let l=0; l<this.foodsAll.length; l++){
            this.foodsAll[l].quantity = ""; 
        } 
      },
      setCarnes(){
        axios.get("https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/products/carnes")
        .then(response => {
          this.foodsAll = response.data
          for(let l=0; l<this.foodsAll.length; l++){
            this.foodsAll[l].quantity = "";
            this.foodsAll[l].type = "carnes"; 
          }
        })
      },
      setVegetales(){
        axios.get("https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/products/verduras")
        .then(response => {
          this.foodsAll = response.data
          for(let l=0; l<this.foodsAll.length; l++){
            this.foodsAll[l].quantity = ""; 
            this.foodsAll[l].type = "verduras";
          }
        })
      },
      setFrutas(){
        axios.get("https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/products/frutas")
        .then(response => {
          this.foodsAll = response.data
          for(let l=0; l<this.foodsAll.length; l++){
            this.foodsAll[l].quantity = ""; 
            this.foodsAll[l].type = "frutas";
          }
        })
      },
      setMenestras(){
        axios.get("https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/products/menestras")
        .then(response => {
          this.foodsAll = response.data
          for(let l=0; l<this.foodsAll.length; l++){
            this.foodsAll[l].quantity = ""; 
            this.foodsAll[l].type = "menestras";
          }
        })
      },
      confirmPorduct(){
        let productsToSend = this.products.slice()

        for(let l=0; l<productsToSend.length; l++){
            delete productsToSend[l].quantity_added_now
          }

        function renameKey(obj, old_key, new_key) {
           if(old_key !== new_key) {
               Object.defineProperty(obj, new_key, 
                  Object.getOwnPropertyDescriptor(obj, old_key));
                delete obj [old_key];
           }
        }
        productsToSend.forEach((obj) => renameKey(obj, 'quantity_added_last', 'quantity'));
        console.log(productsToSend[0])
        
        let apiUrl = "https://us-central1-yupay-mikhuy.cloudfunctions.net/app/api/v1.0/users/products/MDAsyGDYliP00B1LQqjAmZSYUc02"
        
        // METODO PARA AGREGAR PRODUCTOS A FIREBASE
        for(let m=0; m<productsToSend; m++){
          fetch(apiUrl , {
              method: "POST",
              body: JSON.stringify(productsToSend[m]),
              headers: {
                  "Content-Type": "application/json;charset=utf-8",
              },
          })
              .then((res) => res.text())
              .catch((error) => console.error("Error:", error))
              .then((response) => console.log("Success:", response));
        }

        // METODO DELETE PARA BORRAR ALGUN PRODUCTO 
        // fetch(apiUrl , {
        //        method: "DELETE",
        //        body: JSON.stringify({name:"lomito sasami de pollo"}),
        //        headers: {
        //            "Content-Type": "application/json;charset=utf-8",
        //        },
        //    })
        //        .then((res) => res.text())
        //        .catch((error) => console.error("Error:", error))
        //        .then((response) => console.log("Success:", response));
                  
        this.dialog = false
      }
    },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Sofia&family=Trocchi&display=swap');

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
/* Decoración del input para Mobile */
.input-wrapper {
  position: relative;
  width: 100%;
}
.input {
  color: #191919;
  padding: 10px 10px 10px 10px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #FFC300;
}
.input-icon {
  color: #FFC300;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.confirmProduct{
  position: absolute;
  right: 25px;
}
/* Personalizando Classification Cards */
/* .classification-cards{
  
} */

/* Agregando las opciones de filtrado */
.filter{
  display: none;
}


</style>