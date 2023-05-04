<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header">
          <div class="left-buttons">
            <el-button type="text" @click="$router.push('/MainPage1')">股票</el-button>
            <el-button type="text" @click="$router.push('/MainPage2')">基金</el-button>
            <el-button type="text" @click="$router.push('/MainPage3')">资产</el-button>
          </div>
          <div class="user-info" v-if="loggedIn">
            <span>{{ username }}</span>
          </div>
          <div class="login-register" v-else>
            <el-button type="text" @click="$router.push('/Login')">请登录</el-button>
            <el-button type="text" @click="$router.push('/Register')">注册</el-button>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      loggedIn: false,
      username: '用户名',
    };
  },
  methods: {
    login() {
      // 登录逻辑
    },
    register() {
      // 注册逻辑
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
position: fixed;
top: 0;
left: 0;
right: 0;
background-color: #fff;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
padding: 0 20px;
z-index: 1000;
}

.left-buttons {
display: flex;
gap: 20px;
}

.user-info,
.login-register {
display: flex;
gap: 20px;
}

el-container {
height: 100vh;
}

el-main {
padding-top: 70px;
}
</style>