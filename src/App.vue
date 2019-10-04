<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <my-footer></my-footer>
    
  </div>
</template>

<script>
import MyHeader from "./components/header"
import MyFooter from "./components/footer"
export default {
  name: 'App',
  components:{
    MyHeader,
    MyFooter
  }
}
</script>

<style>
#app {
}
</style>
