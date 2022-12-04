<template>
  <div>
    <ul class="blog-header-nav" v-if="NavList && NavList.length > 0">
      <router-link
        v-for="item in NavList"
        @click.native="item.handle"
        :key="item.title"
        :to="item.to"
      >
        <i :class="item.icon"></i>
        <li :class="item.children ? 'relative' : ''">
          {{ item.title }}

          <transition name="el-zoom-in-top">
            <ul v-if="item.children" class="blog-header-nav--sub">
              <router-link
                v-for="child in item.children"
                to=""
                :key="child.title"
              >
                <i :class="child.icon"></i>
                <li>
                  {{ child.title }}
                </li>
                <i v-show="child.afterIcon" :class="child.afterIcon"></i>
              </router-link>
            </ul>
          </transition>
        </li>

        <i v-show="item.afterIcon" :class="item.afterIcon"></i>
      </router-link>
    </ul>
  </div>
</template>

<script>
import navlist from "@/config/nav.config";
const { NAV_LIST } = navlist;
export default {
  name: "BlogHeaderNav",
  computed: {},
  data() {
    return {
      NavList: NAV_LIST,
    };
  },

  mounted() {},

  methods: {


     
    openModal() {
      this.$store.dispatch("changeShowModal");
      console.log(111);
    },
  },
};
</script>

<style lang="stylus">
.relative {
  position: relative;
}

.blog-header-nav {
  display: flex;
  justify-content: space-around;
  width: 700px;

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
  }

  a {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &:hover .blog-header-nav--sub {
      display: block;
    }
  }
}

.blog-header-nav--sub {
  position: absolute;
  top: 22px;
  left: -30px;
  display: none;
  background-color: #fff;

  a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80px;
  }
}
</style>