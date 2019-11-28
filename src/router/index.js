import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/user'
import Children from '@/components/children'
import mapmm from '@/components/map'
import Test from '@/components/test'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  console.log(location)
  return routerPush.call(this, location).catch(error=> error)
}//解决导航栏 连续点击同一路由 报错问题
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mapmm',
      name:'mapmm',
      component: mapmm
    },
    {
      path: '/hello',
      name:'hello',
      // redirect: { name: 'user'},// path  '/user'
      component: HelloWorld
    },
    {
      path: '/user',
      name:'user',
      component: User,
    },
    {
      path: '/test',
      name:'test',
      component: Test,
    }
  ]
})
