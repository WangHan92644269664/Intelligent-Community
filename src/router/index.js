import Vue from 'vue'
import Router from 'vue-router'
// import Header from '../components/Header'
import Message from '../pages/Message'
import index from '../pages/index'
import Order from '../pages/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:'/message',
      name:'Message',
      component:Message
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
  ]
})
