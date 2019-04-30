import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import phone from '@/components/phone'
import myself from '@/components/myself'
import work from '@/components/work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/phone',
      name: 'phone',
      component: phone
    },
    {
      path: '/',
      name: 'myself',
      component: myself
    },
    {
      path: '/work',
      name: 'work',
      component: work
    }

  ]
})
