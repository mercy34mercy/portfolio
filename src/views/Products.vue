<template>

<a>Products List</a>
  <div class="row flex-row flex-nowrap overflow-auto">
    
        <div class="card card-block h-100" >
          <img class = "logo" src = "@/assets/hakadori.png">
          <p>ハカドリくん</p>
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
  width:30%;
  padding: 5%;
}
</style>