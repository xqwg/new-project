import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/user'
// import Children from '@/components/children'
import mapmm from '@/components/map'
import Test from '@/components/test'

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  console.log(location)
  return routerPush.call(this, location).catch(error => error)
}// 解决导航栏 连续点击同一路由 报错问题
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mapmm',
      name: 'mapmm',
      component: mapmm,
      children: [
        {path: 'user', component: User},
        {path: 'test', component: Test}
      ]
    },
    {
      path: '/hello',
      name: 'hello',
      // redirect: { name: 'user'},// path  '/user'
      component: HelloWorld,
      // 路由独享的钩子函数
      // 代码理解为只有进入/page1才会触发beforeEnter这个钩子，如果进入其他页面，是不触发的；

      beforeEnter: (to, from, next) => {
        console.log(to, '路由独享的钩子函数', from)
        // next(false)//拦截
        next()// 跳转到下一个页面
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
