import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/good'
import sellers from '../components/sellers/sellers'
import discuss from '../components/discuss/discuss'
Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path:'/',     
      component:goods
    },
    {
      path:'/good',
      component : goods,
    },
    {
      path:'/sellers',
      component : sellers
    },
    {
      path:'/discuss',
      component : discuss
    }
  ]
})
