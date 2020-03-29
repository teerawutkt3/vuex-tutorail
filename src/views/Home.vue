<template>
  <div class="home text-center">
    <img class="mt-5" alt="Home logo" src="../assets/home.png" width="120px">
    <HelloWorld msg="Welcome to Home Management System"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
  body{
    /*background-image: linear-gradient(to bottom right, #ffdc6e, yellow);*/
  }
</style>
