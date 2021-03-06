import Vue from 'vue'
import Router from 'vue-router'
import ZhengWu from '../pages/ZhengWu/ZhengWu'
import Three from '../pages/ZhengWu/Three/Three'
import ProvertyPeople from '../pages/ZhengWu/Poverty/PovertyPeople'
import Working from '../pages/Working/Working'
import WorkingPlan from '../pages/Working/Plan/PlanMy'
import WorkingNoticeMange from '../pages/Working/Notice/NoticeMange'
import Data from '../pages/Data/Data'
import Gis from '../pages/GIS/GIS'
import Dangjian from '../pages/DangJian/DangJian'
import Organization from '../pages/DangJian/Activity/Three/Organization'
import BuildingPeople from '../pages/DangJian/Building/MemberMange/PartyList'
import StudySetting from '../pages/DangJian/Study/ProjectSetting/ProjectSetting'
import ZongZhi from '../pages/ZongZhi/ZongZhi'
import ZongZhiOrigin from '../pages/ZongZhi/Organization/Organization'
import ZongZhiSpecial from '../pages/ZongZhi/Special/Special'
import ImportantArea from '../pages/ZongZhi/Society/ImportantArea'
import ZongZhiSchool from '../pages/ZongZhi/Campus/School'
import ZongZhiProtect from '../pages/ZongZhi/Protect/ProtectRoad'
import DisputeFoundReport from '../pages/ZongZhi/Dispute/FoundReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/data',
      component:Data
    },
    {
      path:'/gis',
      component:Gis
    },
    {
      path:'/zhengwu',
      component:ZhengWu,
      meta:{
        showHeader:true
      },
      children:[
        {
          path:'/zhengwu/three',
          component:Three,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/zhengwu/poverty',
          component:ProvertyPeople,
          meta:{
            showHeader:true
          },
          children:[
            {
              path:'/zhengwu/poverty/people',
              component:ProvertyPeople,
              meta:{
                showHeader:true
              },
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
      meta:{
        showHeader:true
      },
      children:[
        {
          path:'/working/plan',
          component:WorkingPlan,
          meta:{
            showHeader:true
          },
          children:[
            {
              path:'/working/plan/my',
              component:WorkingPlan,
              meta:{
                showHeader:true
              },
            },
          ]
        },
        {
          path:'/working/notice',
          component:WorkingNoticeMange,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/working',
          redirect:'/working/plan'
        }
      ]
    },
    {
      path: '/dangjian',
      component: Dangjian,
      meta:{
        showHeader:true
      },
      children: [
        {
          path:'/dangjian/activity/three/origan',
          component:Organization,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/building/people/list',
          component:BuildingPeople,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/study/setting',
          component:StudySetting,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian',
          redirect: '/dangjian/activity/three/origan'
        }
      ],

    },
    {
      path:'/zongzhi',
      component:ZongZhi,
      meta:{
        showHeader:true
      },
      children:[
        {
          path:'/zongzhi',
          redirect: '/zongzhi/organ/institution'
        },
        {
          path:'/zongzhi/organ/institution',
          component:ZongZhiOrigin,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/special/release',
          component:ZongZhiSpecial,
          meta:{
            showHeader:true
          }
        },
        {
          path: '/zongzhi/socity/important',
          component: ImportantArea,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/dispute/found',
          component: DisputeFoundReport,
          meta: {
            showHeader: true
          },
        },
        {
          path:'/zongzhi/campus/school',
          component:ZongZhiSchool,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/protect/road',
          component:ZongZhiProtect,
          meta:{
            showHeader:true
          }
        }
      ]
    },
    {
      path:'/',
      redirect:'/working/plan'
    }
  ]
})
