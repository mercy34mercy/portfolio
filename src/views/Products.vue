<template>
  <div class="row flex-row flex-nowrap overflow-auto">
    <div class="col-4" v-for="idea in ideas" v-bind:key="idea">
        <div class="card card-block h-100" >
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
    ideas:["あ","い","う","え","お"]
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
</style>