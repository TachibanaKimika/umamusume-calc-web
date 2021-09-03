/*
 * @Author: Akarichan
 * @LastEditors: Akarichan
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: () => import('../components/ToreSimulation.vue')
  },
  {
    path: '/SinlgeCardAnalysis',
    name: 'SinlgeCardAnalysis',
    component: () => import('../components/SinlgeCardAnalysis.vue')
  },
  {
    path: '/DataAnalysis',
    name: 'DataAnalysis',
    component: () => import('../components/DataAnalysis.vue'),
    children: [
      {
        name:'支援卡类型统计',
        path: '',
        component: () => import('../components/DataComponet/Echarts_CardAtbCount.vue'),
      },
      {
        name:'全卡数据',
        path: 'CardAtbCount',
        component: () => import('../components/DataComponet/CardData.vue'),
      },
      {
        name:'支援卡属性可视化',
        path: 'CardDataCharts',
        component: () => import('../components/DataComponet/CardDataCharts.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
