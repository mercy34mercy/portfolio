<template>
  <p class="title">Products List</p>

  <div class="container">
    <div class="card" v-for="idea in ideas" v-bind:key="idea">
      <div class="card-body">
        <div class="row toprow">
          <div class="col">
            <a :href="idea.url"><img class="logo" :src="idea.src" /></a>
          </div>
          <div class="col">
            <p class="ideaname">{{ idea.name }}</p>
          </div>
        </div>
        <div class="row underrow">
          <div class="col">
            <div class="row"></div>
            <div class="row">
              <div class="logogit">
                <a :href="idea.githuburl"
                  ><img class="git" src="@/assets/logo_github.png"
                /></a>
              </div>
            </div>
          </div>
          <div class="col">
            {{ idea.coment }}
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
    ideas: [
      {
        name: "ハカドリくん",
        src: require("../assets/iconhakadorikun.png"),
        url: "https://play.google.com/store/apps/details?id=jp.masashi.hakadori",
        githuburl: "https://github.com/mercy34mercy/hakadorikun",
        coment:
          "はかどりくんは、大学の課題の管理がしにくいそんな悩みを解決するアンドロイドアプリです",
      },
      {
        name: "banmeshi",
        src: require("../assets/banmeshi.png"),
        url: "https://banmeshikun.com/",
        githuburl: "https://github.com/mercy34mercy/banmeshi_vue",
        coment: "banmeshiは自炊をしたいけど何を作るか決めるのがめんどくさい!というお悩みを解決するアプリです",
      },
      {
        name: "京都通り名タイピング",
        src: require("../assets/kyototyping.png"),
        url: "https://kyoto-typing.net/",
        githuburl: "https://github.com/mercy34mercy/Reacttyping",
        coment: "京都の通り名をタイピングで覚えちゃおうという楽しいゲームです",
      },
    ],
    syasin: require("@/assets/logo_github.png"),
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
  height: 20rem;
}

.title {
  font-size: 3rem;
  
}

.logo {
  height: 10em;
  padding: 5%;
  max-width: 10em;
}

.logogit{
  margin:0 auto;
}

.row {
  height: 50%;
}

.git {
  padding: 1em;
  height: 6em;
}

.ideaname {
  font-size: 2em;
  font-weight: bold;
}

.row_ {
  height: 50%;
}


</style>