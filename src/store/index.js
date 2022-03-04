import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Agregando el Filtro
let comidas = require('../database/prueba_tottus.json');

let Fruits = [], Vegetables = [], Stews = [], foodsAll = [];

for(let i=0; i<comidas.frutas.length;i++){
  Fruits[i] = comidas.frutas[i];
}
for(let j=0; j<comidas.verduras.length;j++){
  Vegetables[j] = comidas.verduras[j];
}
for(let k=0; k<comidas.menestras.length;k++){
  Stews[k] = comidas.menestras[k];
}
foodsAll = foodsAll.concat(Fruits);

for(let f=0; f<foodsAll.length; f++){
  foodsAll[f].available = true;
}

const foods = () => {
  return foodsAll
}

export default new Vuex.Store({
  state: {
    foods: foods(),
    filter: {
      query: '',
      avalaible: true,
    },
    drawer: true,
    isloggedin: false,
    role: "",
    generalConfig:{
      email: '',
      name: ''
    },
    keysandsecurity:{
      meetup:''
    },
    items: [{
      text: 'Inicio',
      to:'/home',
      icon: 'mdi-home',
    },
    {
      text: 'Lista de compras',
      to:"/compras",
      icon: 'kitchen',
    },
    {
      text: 'Mis alimentos',
      to:'/alimentos',
      icon: 'restaurant_menu'
    },
    {
      text: 'Recetas',
      to:'/recetas',
      icon: 'receipt'
    },
    
    ],
    otherItems: [
      {
        text: 'Perfil',
        to: '/profile',
        icon: 'mdi-account'
      },
      {
        text: 'Configuración',
        to: '/config',
        icon: 'settings',
      }
  
    ]
  
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setEventDrawer: (state, payload) => (state.eventDrawer = payload),
    toggleEventDrawer: state => (state.eventDrawer = !state.eventDrawer),
    setGeneralConfig: (state, payload) => (state.config.generalConfig = payload),
    setKeysAndSecutityConfig: (state, payload) => (state.config.keysandsecurity = payload),
    setFooterConfig: (state, payload) => (state.config.footerConfig = payload),

    setQuery (state, query) {
      state.filter.query = query;
    },
    setAvailable (state){
      state.filter.avalaible = ! state.filter.avalaible;
    }
  },
  getters: {
    links: (state) => {
      return state.items
    },
    others: (state) => {
      return state.otherItems
    },
    filteredFoods: (state) => {
      let foods = state.foods.filter(food => food.avalaible === state.filter.avalaible);
      if (state.filter.query.length > 2){
        return foods.filter(food => food.name.toLowerCase().includes(state.filter.query));
      }
      return foods;
    }
  },
  modules: {}
});