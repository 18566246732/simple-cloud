<template>
  <div id="app">
    <homepage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Homepage from './page/homepage.vue';

export default {
  name: 'App',
  components: {
    Homepage
  }
};
</script>

<style>
@font-face {
  font-family: "PingFang SC";
  src: url('./assets/font/PingFangSC.ttf');
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "PingFang SC", "Source Sans Pro", "Helvetica Neue", "Microsoft Yahei", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}
</style>
