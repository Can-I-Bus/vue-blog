<template>
  <div>

    <v-card class="index-article">
      <img :src="article.cover" alt="!" />
      <div class="article-content">
        <h2>{{ title }}</h2>
        <span>{{ date }}</span>
         <span>{{nikname}}</span> 
        <p>{{ content }}</p>
      </div>
    </v-card>

  </div>
</template>

<script>
export default {
  name: "BlogArticleItem",
    props:{
        article:{
            type:Object
        }
    },
  data() {
    return {};
  },
    computed:{
        title(){
            return this.article.title
        },
        date(){
            return this.article.date
        },
        nikname(){
            return this.article.author.nikname ?? '匿名作者'
        },
        content(){
            return this.article.content.match(/>([^<>]+)</)?.[1]
        }
    },
  mounted() {},

  methods: {},
};
</script>

<style lang="stylus" ></style>