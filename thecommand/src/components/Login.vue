<template>
  <div class="login_container">
    <div class="login_box">
      <el-form ref="loginFormRef" label-width="55px" class="login_form" :model="LoginForm" :rules="LoginFormRules">
        <el-form-item label="账号" prop="username">
          <el-input placeholder="请输入账号" v-model="LoginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入登录密码" v-model="LoginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="info" class="btn" round @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  //登录表单数据绑定对象
  data() {
    return {
      LoginForm: {
        username: '',
        password: '',
      },
      LoginFormRules: {
        username: [
          // {required: true, message: '请输入账号', trigger: 'blur'},
          // {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
        ],
        password: [
          // {required: true, message: '请输入登录密码', trigger: 'blur'},
          // {min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur'}
        ],
      }
    }
  },
  methods:{
    login(){
      this.$refs.loginFormRef.validate(valid =>{
        if(!valid) return;
        this.$router.push('/home');
      });
    }
  }
}
</script>

<style lang="less" scoped>//scoped代表当前style只在该组件生效
.login_container {
  background-color: #afdfe4;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login_form{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
}
.btn{
  width: 100%;
}
</style>
