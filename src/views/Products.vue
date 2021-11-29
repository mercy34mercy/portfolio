<template>

<a>Products List</a>
  <div class="row flex-row flex-nowrap overflow-auto">
    <div class="col-4" v-for="idea in ideas" v-bind:key="idea">
        <div class="card card-block h-100" >
          <img class = "logo" src = idea>
            {{idea}}
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
    ideas:["@/assets/hakadori.png"]
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
.row{
  height: 400px;
}

.logo{
  width:40%
}
</style>