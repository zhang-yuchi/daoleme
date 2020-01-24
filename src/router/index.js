import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:"/login",
    component:()=>import('../views/login.vue')
  },
  {
    path:"/member",
    component:()=>import('../views/member/index.vue'),//放导航
    children:[
      {
        path:"action",
        component:()=>import('../views/member/action/action.vue')
      },
      {
        path:"profile",
        component:()=>import('../views/member/profile/profile.vue')
      }
    ]
  },
  {
    path:"/organizer",
    component:()=>import('../views/organizer/index.vue'),
    children:[
      {
        path:'action',
        component:()=>import('../views/organizer/action/action.vue')
      },
      {
        path:'profile',
        component:()=>import('../views/organizer/profile/profile.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(to)
  console.log("this is from")
  console.log(from)
  console.log("___")
  if(from.meta.identify=="member"){
    console.log("是成员进入")
  }
})
export default router
