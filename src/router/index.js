import Vue from 'vue'
import Router from 'vue-router'
// import Header from '../components/Header'
import Message from '../pages/Message'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Header',
    //   component: Header
    // },
    {
      path:'/message',
      name:'Message',
      component:Message
    }
  ]
})
