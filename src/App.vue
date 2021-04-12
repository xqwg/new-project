<template>
  <div id="app">
      <!-- vue 事件修饰符  history
      <router-link to="/hello">Foo</router-link>
      <router-link to="/user/user/post/123">user</router-link>
      <router-link to="/user/aa/children">aa</router-link> -->
      <!-- <div>User---- {{ $route.params }}</div> -->
      <!-- <div @click="checkrout">click</div> -->

      <router-view></router-view>
      <button @click="rout">routhello</button>
      hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br>
      hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br>
      hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br>
      hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br> hhhhhh<br>
         <button @click="rout1">while</button>
         　假如我们有一个页面很长，滚动后其中的某个位置后跳转，
         这时新的页面的滚动条位置就会在上一个页面停留的位置；这个时候我们就可以利用afterEach进行重置：

      <!-- <button @click="routuser">routuser</button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    // '$route' (to, from) {
    //   console.log('to=>',to,'from=>',from)
    //   // 对路由变化作出响应...
    // }
  },
  
 
  methods: {
    // 1,$route里面fullPath和path
      checkrout() {
        //除了使用 <router-link> 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。#router
        //  console.log(this.$router,this.$route)
      },
      rout(){
        //  this.$router.push({ path: 'hello',query: { userId: '123' }});
        //  this.$router.push({ name: 'hello',query: { userId: '123' }});
        //  this.$router.push({ name: 'hello',params: { userId: '123' }});

        // this.$router.push({ name: 'mapmm',params: { id: '123',xx:'11' }});//重定向 参数params: { id: '123' }=》user
        //  console.log(this.$router,this.$route)
         //path，params 会被忽略，
         this.$router.push('/mapmm');


      },
      rout1(){
                 this.$router.push('/hello');
      },
      routuser(){
        //  this.$router.push({ path: 'user/aa/children'});
        // this.$router.push({ path: 'user/aaaa'});
        //  this.$router.push({ name: 'user', params: { id: 123 }});
        //  console.log(this.$router,this.$route)
      }

    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
