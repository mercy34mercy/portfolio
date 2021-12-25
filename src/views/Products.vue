<template>

<a>Products List</a>


<div class = "container">
  <div class="card" v-for="idea in ideas" v-bind:key="idea">
  <div class="card-body">
        <div class="row toprow" >
          <div class="col">
            <img class = "logo" src = {{syasin}}>
          </div>
            <div class = "col">
          <p>{{idea.name}}</p>
        </div>
      </div>
      <div class="row underrow">
        <div class="col">
          <img class = "git" src="@/assets/logo_github.png">
        </div>
        <div class="col">
          <a href="https://github.com/mercy34mercy/hakadorikun"></a>
        </div>
      </div>
      </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => ({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    ideas:[{name:"Beautifulgirl",src:require("@/assets/logo_github.png")},{name:"ハカドリくん",src:require("@/assets/logo_github.png")}],
    syasin: require("@/assets/logo_github.png")
  }),
  methods: {
    getWindowSize: function () {
      this.windowWidth = window.innerWidth;

      this.windowHeight = window.innerHeight;
    },
  },
  mounted() {
    window.addEventListener("resize", this.getWindowSize);
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 400px;
}

.logo {
  width: 50%;
  padding: 5%;
}

.row{
  height: 50%;
}

.git{
  height: 30%;
}
</style>