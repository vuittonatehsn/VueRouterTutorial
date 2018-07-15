<template>
  <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link class="nav-link" :to="{name: 'Home'}">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/page">Page</router-link>
              </li>
            </ul>
          </div>
        </nav>
        <router-view name="menu"></router-view>
        <img src="./assets/logo.png">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style>
 #app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  text-align: center;
} 
</style>


