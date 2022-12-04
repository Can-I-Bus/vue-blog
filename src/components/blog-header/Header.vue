<template>
    <div class="blog-header">
        <h1>MAX</h1>
        <HeaderNav />
    </div>
</template>

<script>
import HeaderNav from './HeaderNav'
export default {
    name: 'BlogHeader',
    components:{HeaderNav},
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="stylus">
.blog-header
    position: fixed
    top: 0
    display: flex
    justify-content: space-between
    align-items: center
    padding-left: 40px
    width: 100%
    height: 60px
    background-color #ccc
    h1
        color: #fff
        font-size 30px
        font-weight 600
</style>