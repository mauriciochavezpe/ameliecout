import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home
  },{
    path: '/Servicios',
    // name: 'Services',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },{
    path: '/Nosotros',
    // name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  },{
    path: '/Contacto',
    // name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },{
    path:'*',
    name:'404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router