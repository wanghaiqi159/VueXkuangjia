import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const test1 = ()=>import('@/views/index.vue')
const test2 = ()=>import('@/views/index1.vue')
const test3 = ()=>import('@/views/index2.vue')
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    { 
      path:'/',
      component: test1,
      children:[
        {
          path:'/',
          component: test2,
        },
        {
          path:'/test3',
          component: test3,
          meta:{
            auth:true,
          }
        }
      ]
    },
  ]
  // routes:[
  //   {
  //     path:"/",
  //     component:resolve=>require(['@/views/index'],resolve),
  //     children:[
  //       {
  //         path:'/',
  //         component:resolve=>require(['@/views/index1'],resolve),
  //       },
  //       {
  //         path:"/index2",
  //         component:resolve=>require(['@/views/index2'],resolve),
  //         meta:{
  //           auth:true,
  //         }
  //       },
  //     ],
  //   },
  //   {
  //     path:"/index3",
  //     conponent:resolve=>require(['@/views/index3'],resolve)
  //   }
  // ]
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some(route=>route.meta.auth)){
    if(sessionStorage.getItem("next")) {
      next()
    }else{
      next('/')
    }
  }else{
    next()
  }
})
export default router
