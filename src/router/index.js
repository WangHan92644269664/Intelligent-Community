import Vue from 'vue'
import Router from 'vue-router'
import ZhengWu from '../pages/ZhengWu/ZhengWu'
import Three from '../pages/ZhengWu/Three/Three'
import ProvertyPeople from '../pages/ZhengWu/Poverty/PovertyPeople'
import Working from '../pages/Working/Working'
import WorkingPlan from '../pages/Working/Plan/PlanMy'
import WorkingNoticeMange from '../pages/Working/Notice/NoticeMange'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/zhengwu',
      component:ZhengWu,
      children:[
        {
          path:'/zhengwu/three',
          component:Three
        },
        {
          path:'/zhengwu/poverty',
          component:ProvertyPeople,
          children:[
            {
              path:'/zhengwu/poverty/people',
              component:ProvertyPeople
            },
          ]
        },
        {
          path:'/zhengwu',
          redirect:'/zhengwu/three'
        }
      ]
    },
    {
      path:'/working',
      component:Working,
      children:[
        {
          path:'/working/plan',
          component:WorkingPlan,
          children:[
            {
              path:'/working/plan/my',
              component:WorkingPlan,
            },
          ]
        },
        {
          path:'/working/notice',
          component:WorkingNoticeMange,
        },
        {
          path:'/working',
          redirect:'/working/plan'
        }
      ]
    }
  ]
})
