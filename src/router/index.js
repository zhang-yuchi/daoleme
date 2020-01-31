import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/welcome"
  },
  {
    path: "/welcome",
    component: () => import('../views/index.vue'),
  
    
  },
  {
    path: "/login",
    component: () => import('../views/login/login')
  },
  {
    path: "/register",
    component: () => import('../views/login/register')
  },
  {
    path:"/action",
    component:()=>import("../views/main/action.vue"),
    children:[{
      path:"condition",
      component:()=>import('../views/main/action-condition.vue')
    },{
      path:"details",
      component:()=>import('../views/main/action-details.vue')
    }]
  },
  {
    path:"/feedback",
    component:()=>import('../views/main/feedback')
  },
  {
    path:"/group",
    component:()=>import('../views/main/group')
  },
  {
    path:"/msgupdate",
    component:()=>import('../views/main/msgupdate')
  },
  {
    path: "/profile",
    component: () => import('../views/member/profile/profile.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router