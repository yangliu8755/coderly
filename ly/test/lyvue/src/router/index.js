import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/home/home.vue'
import About from '@/views/about/about.vue'
import Collect from '@/views/collect/collect.vue'
import Me from '@/views/me/me.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component:Home
    },
    {
      path: '/about',
      name: 'About',
      component:About
    },  
     {
      path: '/me',
      name: 'Me',
      component:Me
    },
    {
      path: '/collect',
      name: 'Collect',
      component:Collect
    },
  ]
})
