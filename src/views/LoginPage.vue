<template>
  <div class="login-container">
    <div class="login-form">
      <h2 class="login-title">登录</h2>
      <div class="form-field">
        <el-input v-model="input1" placeholder="用户名" class="input-field" />
      </div>
      <div class="form-field">
        <el-input v-model="input2" placeholder="密码" type="password" class="input-field" />
      </div>
      <div class="form-field">
        <el-button type="primary" class="login-button" @click="login">登录</el-button>
      </div>
      <div class="form-field">
        <span class="tips" v-show="input1 === '' || input2 === ''">请输入用户名和密码</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ElInput, ElButton, ElMessage } from 'element-plus';
import { ref } from 'vue';

export default {
  components: {
    ElInput,
    ElButton,
  },
  setup() {
    const input1 = ref('');
    const input2 = ref('');
    const user = {};

    const login = async () => {
      if (input1.value === '' || input2.value === '') {
        ElMessage.error('请输入用户名和密码！');
        return;
      }

      try {
        user.dbUserName = input1.value;
        user.dbPassword = input2.value;

        const response = await axios.post('http://localhost:8080/user/queryOneUser', user);
        if (response.data.success) {
          ElMessage.success('登录成功！');
          // 这里可以添加成功登录后的操作，例如跳转到其他页面
        } else {
          ElMessage.error('登录失败，请检查用户名和密码！');
        }
      } catch (error) {
        console.log(error);
        ElMessage.error('登录失败，请稍后再试！');
      }
    };

    return {
      input1,
      input2,
      login,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-form {
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.form-field {
  width: 100%;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
}

.login-button {
  width: 100%;
  background-color: #409EFF;
  border-color: #409EFF;
  border-radius: 4px;
}

.tips {
  color: red;
  font-size: 14px;
  font-weight: bold;
  display: block;
  text-align: center;
}
</style>
