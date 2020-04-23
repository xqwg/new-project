// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 进入路由前方法勾子
router.beforeEach((to, from, next) => {
  // console.log('sssssssssssssssss')
  // if (to.name === 'helo') {
  next()
  // } else {
  //   next('/user')// 循环进入路由前方法勾子
  // }

  // console.log(to, '目标路由')
  // console.log(from, '源路由')
  // console.log(next, '跳转到下一个路由')
  // /
  //   to 目标路由
  //   from 源路由
  //   next 跳转到下一个路由
  // */
  // 这里暂时用local、storange来简单模拟验证权限
  // if (window.localstorange.getItem('token')) {
  //   // 如果存在，则直接跳转到对应路由
  //   next()
  // } else {
  //   // 如果不存在，则跳转到登录页
  //   next('/login')
  // }
})

router.afterEach((to, from) => {
  console.log(to, 'afterEach目标路由')
  console.log(from, 'afterEach源路由')
  window.scrollTo(0, 0)
})
// 1、全局钩子函数（beforeEach、afterEach)

// 2、路由独享的钩子函数（beforeEnter）

// 3、组件内钩子函数（beforeRouterEnter、beforeRouterUpdate、beforeRouterLeave）
