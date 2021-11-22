<template>
  <div class="home"></div>
  {{ windowWidth }}
  <div class="photo">
    <img src="@/assets/me.jpg" class="img-fluid" alt="..." />
    <p>Masashi Kobayashi</p>
  </div>
  <div class="img-container">
    <img src="@/assets/logo_facebook.png" class="img-fluid" href="" alt="..." />
    <img src="@/assets/logo_twitter.png" class="img-fluid" href="" alt="..." />
    <img
      src="@/assets/logo_instagram.png"
      class="img-fluid"
      href=""
      alt="..."
    />
    <img src="@/assets/logo_github.png" class="img-fluid" href="" alt="..." />
    <img src="@/assets/logo_linkedin.png" class="img-fluid" href="" alt="..." />
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
.photo img {
  max-width: 100%;
  height: auto;
  padding-right: 35%;
  padding-left: 15%;
}
.img-container {
  display: flex; /* flexbox */
  justify-content: center; /* 水平方向 */
}

.img-container img {
  width: 20%;
  height: auto;
  padding: 6%;
}
</style>


