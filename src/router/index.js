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
    component: ()=>import(/*  webpackChunkName: "home" */ '@/views/Home'),
    meta: {
      requiresAuth: true,
      title: "Home"
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
      next('login');
    }
  } else if (firebase.auth.currentUser && to.name == "Login") {
    next("/");
  } else {
    next();
  }
})

export default router