import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "about" */ './views/Layer.vue'),
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
        },
        {
          path: '/customer',
          name: 'customer',
          component: () => import(/* webpackChunkName: "about" */ './views/customer/Customer.vue'),
          children:[
            {
              path:'/',
              redirect:'/customer/social'
            },
            {
              path: 'social',
              name: 'social',
              component: () => import(/* webpackChunkName: "about" */ './views/customer/Social.vue'),
            },
            {
              path: 'rule',
              name: 'rule',
              component: () => import(/* webpackChunkName: "about" */ './views/customer/Rule.vue'),
            }
          ]
        },
        {
          path: '/staff',
          name: 'staff',
          component: () => import(/* webpackChunkName: "about" */ './views/staff/Staff.vue')
        },
        {
          path: '/fund',
          name: 'fund',
          component: () => import(/* webpackChunkName: "about" */ './views/fund/Fund.vue')
        }
      ]
    },
  ]
})
