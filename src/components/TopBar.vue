<template>
    <div class="topbar">
      <div class="left">
        <button v-for="(item, index) in navItems" :key="index" @click="navigateTo(item.route)">{{ item.label }}</button>
      </div>
      <div class="right" v-if="!loggedIn">
        <button @click="$router.push('/Login')">登录</button>
        <button @click="$router.push('/Register')">注册</button>
        <button @click="$router.push('/xxxxx')">找回密码</button>
        <button @click="$router.push('/xxxxx')">客服</button>
      </div>
      <div class="right" v-else>
        <span>{{ username }}</span>
        <button @click="$router.push('/xxxxx')">个人中心</button>
        <button @click="$router.push('/xxxxx')">客服</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loggedIn: false,
        username: "null",
        navItems: [
          { label: "主页", route: "/" },
          { label: "股票", route: "/stocks" },
          { label: "基金", route: "/funds" },
          { label: "资产", route: "/assets" },
        ],
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      
    },
  };
  </script>
  
  <style scoped>
  .topbar {
    display: flex;
    justify-content: space-between;
    background-color: #24292e;
    padding: 10px;
    color: white;
  }
  
  .left,
  .right {
    display: flex;
  }
  
  button {
    margin-right: 10px;
  }
  </style>
  