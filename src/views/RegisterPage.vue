<template>
    <div class="register-container">
        <el-form ref="registerForm" :model="registerForm" label-width="100px" @submit.prevent="submitForm">
        <h2>注册</h2>
        <el-form-item label="用户名" prop="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="电子邮件" prop="email" :rules="[{ required: true, message: '请输入电子邮件', trigger: 'blur' }]">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <el-input type="password" v-model="registerForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword" :rules="[{ required: true, message: '请再次输入密码', trigger: 'blur' }]">
          <el-input type="password" v-model="registerForm.confirmPassword" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit" @click="submitForm">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterPage',
    data() {
      return {
        registerForm: {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      };
    },
    methods: {
      submitForm() {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            // 注册逻辑
            console.log('注册表单提交成功');
          } else {
            console.log('注册表单验证失败');
            return false;
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  