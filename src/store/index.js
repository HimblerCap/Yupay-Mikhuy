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
      text: 'Home',
      to:'/home',
      icon: 'mdi-home',
    },
    {
      text: 'Compras',
      to:"/compras",
      icon: 'kitchen',
    },
    {
      text: 'Recetas',
      to:'/recetas',
      icon: 'receipt'
    },
    {
      text: 'Alimentos',
      to:'/alimentos',
      icon: 'restaurant_menu'
    },
    {
      text: 'Config',
      to: '/config',
      icon: 'settings',
    },
    {
      text: 'Profile',
      to: '/profile',
      icon: 'logout'
    }
    ],
  
  },
  getters: {
    links: (state) => {
      return state.items
    }
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
  modules: {},
  actions: {}

});