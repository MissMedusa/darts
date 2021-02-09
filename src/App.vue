<template>
  <div id='nav'>
    <Navbar/>
  </div>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: #4e4e4e;
}

body {
  margin: 0px;
  background-color: #abcce6;
  padding-top: 110px;
}
</style>
