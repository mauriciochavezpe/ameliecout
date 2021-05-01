<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <router-view/>
    <!-- <Home/> -->
  </div>
</template>

<script>

// import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 20px; */
}
</style>
