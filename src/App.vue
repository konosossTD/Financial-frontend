
<template>
  <div id="TopBar">
    <TopBar></TopBar>
  </div>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script >
import TopBar from "./components/TopBar.vue";


export default {
  components: {
    TopBar,
  },
};
</script>

<style>
</style>