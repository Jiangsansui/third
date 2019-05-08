import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import phone from '@/components/phone'
import wd from '@/components/wd'
import gzrw from '@/components/gzrw'
import first from '@/components/first'
import second from '@/components/second'

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
      path: '/wd',
      name: 'wd',
      component: wd
    },
    {
      path: '/',
      name: 'gzrw',
      component: gzrw
    },
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '/second',
      name: 'second',
      component: second
    },

  ]
})
