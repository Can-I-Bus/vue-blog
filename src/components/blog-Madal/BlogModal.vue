<template>
    <div>
        <v-dialog
      v-model="showModal"
      width="500"
      
    >
     

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>



    </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'BlogBlogModal',

    data() {
        return {
            
        };
    },
    computed:{
        showModal(){
            return this.$store.state.showModal
        }
    },
    mounted() {
        
    },

    methods: {

    },
};
</script>

<style lang="stylus" scoped>

</style>