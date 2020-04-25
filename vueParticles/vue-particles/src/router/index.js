import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Vuetify from "../views/vuetify";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Vuetify',
    component: Vuetify
  },
    {
      path: '/particles',
      name: 'particles',
      component: Home
    }
  // {
  //   path: '/chart',
  //   name: 'chart',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Chart.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
