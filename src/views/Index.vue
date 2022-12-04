<template>
  <div>
    <div class="index-wrap">
      <Banner />
      <div class="index-keywords">
        <h2>MAX的Blog</h2>
        <span>顶峰相见。</span>
        <span>|</span>
      </div>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div class="index-main--wrap">
      <div class="index-main">
        <div class="index-main-left">
          <v-card class="inde-tips">
            <p>杀不死你的，终会让你更强大</p>
          </v-card>
          <router-link
            :to="{ name: 'article', params: { id: item.id } }"
            v-for="item in articles"
            :key="item.id"
          >
            <ArticleItem class="index-articlewrap" :article="item" />
          </router-link>
        </div>
        <div class="index-main-right">
          <v-card class="admin"></v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/blog-banner/Banner";
import ArticleItem from "@/components/article/ArticleItem";
export default {
  name: "BlogIndex",
  components: { Banner, ArticleItem },
  data() {
    return {
      page: 1,
      size: 4,
      articles: "",
    };
  },

  mounted() {
    this.getArticles();
  },

  methods: {
    async getArticles() {
      let result = await this.$api({ type: "articles" });
      this.articles = result.list;
    },
    initFlex() {},
  },
};
</script>

<style lang="stylus">
.index-keywords {
  position: absolute;
  text-align: center;

  h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 600;
  }

  span {
    color: #fff;
    font-size: 50px;
  }
}

.index-wrap {
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    position: absolute;
    bottom: 0;
  }
}

.index-main--wrap {
  background-image: linear-gradient(to right, #275B83, #E19C76, #E7F7F4);
  opacity: 0.3;
}

.inde-tips {
  width: 600px;
  height: 60px;

  &:hover {
    box-shadow: 7px 15px 25px rgba(32 32 32 0.9) !important;
    transition: 0.5s;
  }
}

.index-main {
  display: flex;
  justify-content: space-between;
  width: 1160px;
  min-width: 960px;
  margin: 0 auto;
  padding-top: 20px;
}

.admin {
  width: 500px;
  height: 100px;
}

.index-article {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 200px;
  width: 800px;

  img {
    width: 300px;
    height: 100%;
  }
}

.index-articlewrap .index-article:nth-child(event) {
  flex-direction: row-reverse;
}

.article-content {
  overflow: hidden;
}
</style>