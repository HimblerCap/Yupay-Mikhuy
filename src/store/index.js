import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  getters: {
    links: (state) => {
      return state.items
    },
    others: (state) => {
      return state.otherItems
    },
  },
  modules: {}
});