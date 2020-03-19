<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-show="$route.meta.isShow"></footer-guide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import { reqCategorys } from "./api";
export default {
  //获取数据
  async mounted() {
    const result = await reqCategorys();
    console.log(result);
  },
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
