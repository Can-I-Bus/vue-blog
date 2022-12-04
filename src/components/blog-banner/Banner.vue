<template>
    <div v-if="imgUrl" :style="bgcImg" :class="PathIsIndex? 'height100':'height400'" class="blog-banner">
    </div>
</template>

<script>
export default {
    name: 'BlogBanner',
    computed:{
        imgUrl(){
            return require(`../../assets/img/${this.$route.meta.bannerImg}`)
        },

        PathIsIndex(){
            return this.$route.path === '/index'
        },
        bgcImg(){
            return `background: url(${this.imgUrl}) no-repeat center/cover`
        }
    },
    data() {
        return {
           
          
        };
    },

    mounted() {
        console.log(this.imgUrl,this.bgcImg)
    },

    methods: {

    },
};
</script>

<style lang="stylus">
.height100
    height: 100vh
.height400
    height: 500px
.blog-banner
    width: 100vw
    box-shadow: 10px 10px 10px rgba(32,32,32,.4)
</style>