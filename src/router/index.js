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
    component:()=>import('../views/member/index.vue')
  },
  {
    path:"/organizer",
    component:()=>import('../views/organizer/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
