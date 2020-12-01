import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import User from '@/views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/user/:id",
    name: "User",
    component: User
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router

// /user/payman => User
// /user/monika => User
// /user/bushra => User
