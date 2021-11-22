<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/history">History</router-link> |
    <router-link to="/products">Products</router-link>
  </div>
  <router-view/>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-left: 60%;
  padding-top: 30px;

  a {
    color: #2c3e50;
    font-size: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
