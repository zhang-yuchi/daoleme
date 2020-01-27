import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/welcome"
  },
  {
    path: "/welcome",
    meta: {
      index: 1
    },
    component: () => import('../views/index.vue'),
    children: [{
        path: "login",
        meta: {
          index: 2
        },
        component: () => import('../views/login/login')
      },
      {
        path: "register",
        meta: {
          index: 2,
        },
        component: () => import('../views/login/register')
      },
    ]
  },
  {
    path: "/member",
    component: () => import('../views/member/index.vue'), //放导航
    children: [{
        path: "action",
        component: () => import('../views/member/action/action.vue')
      },
      {
        path: "profile",
        component: () => import('../views/member/profile/profile.vue')
      }
    ]
  },
  {
    path: "/organizer",
    component: () => import('../views/organizer/index.vue'),
    children: [{
        path: 'action',
        component: () => import('../views/organizer/action/action.vue')
      },
      {
        path: 'profile',
        component: () => import('../views/organizer/profile/profile.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.index > from.meta.index) {
    setTimeout(function () {
      next()
    })
  } else {
    next()
  }




})
export default router