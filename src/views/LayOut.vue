<template>
  <div>
    <Header />

    <div class="blog-main">
      <router-view></router-view>
    </div>
    
    <Footer />
    <Dialog />
  </div>
</template>

<script>
import Header from "@/components/blog-header/Header";
import Footer from "@/components/blog-footer/Footer";
import Dialog from '@/components/blog-Madal/BlogModal'
export default {
  name: "BlogHomeView",
  components: { Header, Footer ,Dialog},
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="stylus">



</style>
