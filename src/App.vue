<template>
  <div id="nav">
    <router-link to="/">Home</router-link>&nbsp;
    <router-link to="/history">History</router-link>&nbsp;
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
    font-size: 14px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  @media only screen and (min-width:651px){/* 中画面用 */
  a {
    color: #2c3e50;
    font-size: 23px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
 
@media only screen and (min-width:961px){/* 大画面用 */
  a {
    color: #2c3e50;
    font-size: 30px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
}
</style>
