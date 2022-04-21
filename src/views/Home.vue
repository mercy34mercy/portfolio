<template>
  <div class="home"></div>
  <div class="container">
  <div class="row row row-cols-2">
    <div class="col-10 img-wrap">
      <img class="myphoto img-fluid"  src="@/assets/me.jpg" alt="..." />
    </div>
    <div class="col-2">
      <p class = "vertical" style="text-align:center;">Masashi &nbsp;&nbsp;Kobayashi</p>
    </div>
    <div class="col-10">
          <div class="img-container">
    <a href="https://www.facebook.com/profile.php?id=100044776764162"><img src="@/assets/logo_facebook.png" class="img-fluid" href="" alt="..." /></a>
    <a href="https://twitter.com/mashikotyan34"><img src="@/assets/logo_twitter.png" class="img-fluid" href="" alt="..." /></a>
    <a href="https://www.instagram.com/mercy34r/"><img
      src="@/assets/logo_instagram.png"
      class="img-fluid"
      href=""
      alt="..."
    /></a>
    <a href="https://github.com/mercy34mercy"><img src="@/assets/logo_github.png" class="img-fluid" alt="..." /></a>
    <a href="https://www.linkedin.com/in/%E9%9B%85%E5%8F%B2-%E5%B0%8F%E6%9E%97-92aaa91a7/"><img src="@/assets/logo_linkedin.png" class="img-fluid" href="" alt="..." /></a>
  </div>
    </div>
  <div class="col-2">
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

.col-2 p{
  font-size: 15px;
  letter-spacing: 3px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100%;
}

.myphoto{
  margin-top: 10%;
}

@media only screen and (min-width:651px){/* 中画面用 */
.col-2 p{
  font-size: 20px;
  letter-spacing: 5px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100%;
}
}
 
@media only screen and (min-width:961px){/* 大画面用 */
  .col-2 p{
  font-size: 30px;
  letter-spacing: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100%;
}
}

.img-container {
  display: flex; /* flexbox */
  justify-content: center; /* 水平方向 */
  width:100%;
    margin-right: auto;
  margin-left: auto;
  margin-top:10%;
}


// .photo {
//   display: flex; /* flexbox */
//   justify-content: center; /* 水平方向 */
// }

.img-container img {
  width: 60%;
  height: auto;
  padding: 6%;
}

.vertical {
	-ms-writing-mode: tb-rl;
	writing-mode: vertical-rl;
  margin-left: 10%;
}

.img-wrap {
  overflow: hidden;
  position: relative;
}

.img-wrap:before {
  animation: img-wrap 2s cubic-bezier(.4, 0, .2, 1) forwards;
  background: #fff;
  bottom: 0;
  content: '';
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

@keyframes img-wrap {
  100% {
    transform: translateX(-100%);
  }
}
</style>


