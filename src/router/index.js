import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'layout',
    redirect:'/index',
    component: () => import(/* webpackChunkName: "about" */ '@/views/LayOut.vue'),

    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Index.vue'),
        meta:{
          bannerImg:'layout-banner.png'
        },
      },
      {
        path: '/find',
        name: 'find',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Find.vue'),
        meta:{
          bannerImg:'find-banner.png'
        },
      },
      {
        path: '/diary',
        name: 'diary',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Diary.vue'),
      },
      {
        path: '/collection',
        name: 'collection',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Collection.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
      {
        path: '/article/:id',
        name: 'article',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Article.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
