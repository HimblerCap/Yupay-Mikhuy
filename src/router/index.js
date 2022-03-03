import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from '@/config/firebase';

Vue.use(VueRouter)

const routes = [{
    path: '*',
    name: 'redirect',
    redirect: {
      path: '/'
    },
    meta: {
      title: `Redirect `,
      color: "#0277bd",
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/*  webpackChunkName: "login"*/ '@/views/Login'),
    meta: {
      requiresAuth: false,
      title: "Login",
    }
  },
  {
    path: '/',
    name: 'Home',
    component: ()=>import(/*  webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      requiresAuth: true,
      title: "Home",
      bottomVisible:true
    }
  },
  {
    path: '/home',
    name: 'HomePage',
    component: ()=>import(/*  webpackChunkName: "home" */ '@/views/Home'),
    meta: {
      requiresAuth: true,
      title: "Home",
      bottomVisible:true
    }
  },
  {
    path: '/compras',
    name: 'Compras',
    component: ()=>import(/*  webpackChunkName: "Compras" */ '@/views/ListaDeCompras'),
    meta: {
      requiresAuth: true,
      title: "Compras",
      bottomVisible:true
    }
  },
  {
    path: '/recetas',
    name: 'Recetas',
    component: ()=>import(/*  webpackChunkName: "Recetas" */ '@/views/Recetas'),
    meta: {
      requiresAuth: true,
      title: "Recetas",
      bottomVisible:true
    }
  },
  {
    path: '/alimentos',
    name: 'Alimentos',
    component: ()=>import(/*  webpackChunkName: "TuaAlimentos" */ '@/views/TusAlimentos'),
    meta: {
      requiresAuth: true,
      title: "Alimentos",
      bottomVisible:true
    }
  },
  {
    path: '/config',
    name: 'Config',
    component: ()=>import(/*  webpackChunkName: "Config" */ '@/views/Config'),
    meta: {
      requiresAuth: true,
      title: "Config",
      bottomVisible:true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ()=>import(/*  webpackChunkName: "Profile" */ '@/views/Profile'),
    meta: {
      requiresAuth: true,
      title: "Profile",
      bottomVisible:true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (firebase.auth.currentUser) {
      next();
    } else {
      next({ name: 'Login'});
    }
  } else if (firebase.auth.currentUser && to.name == "Login") {
    next("/");
  } else {
    next();
  }
})

export default router