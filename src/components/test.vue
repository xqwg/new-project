<template>
  <div class="test">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
     this.array();
  }
  ,methods:{
      array(){
          console.log(new Array(20)[0]);
          console.log(new Array(undefined,undefined).join('abc'))
      }
  }
}
</script>

<style scoped>

</style>
