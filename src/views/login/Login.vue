<template>
  <div :style="bg" class="login-wrap">
    <el-form ref="login" :model="loginForm" :rules="loginRules">
      <h1 class="title">{{ title }}</h1>
      <div class="login-box">
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" placeholder="请输入您的账号" clearable type="text" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入您的密码" clearable type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginSubmit('login')">登录</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui'
// 背景arr
const bgArr = [
  { backgroundImage: 'url("../../../static/images/bg1.jpg")' },
  { backgroundImage: 'url("../../../static/images/bg2.jpg")' },
  { backgroundImage: 'url("../../../static/images/bg3.jpg")' }
]
// 随机数生成
const random = parseInt(Math.random() * bgArr.length)

export default {
  name: 'Login',
  data() {
    return {
      title: 'solitary-admin',
      bg: bgArr[random],
      loginForm: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [{ required: true, message: '密码不能为空', tirgger: 'blur' }]
      }
    }
  },
  methods: {
    // 验证登录提交
    handleLoginSubmit(form) {
      // 验证输入框是否为空
      this.$refs[form].validate(valid => {
        // 判断验证
        if (valid) {
          this.$router.push('/')
        } else {
          Message({
            type: 'error',
            message: '错误提交',
            showClose: 'true',
            duration: 3000
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
// 重置elementUi布局
.login-wrap {
  .el-form-item {
    margin-bottom: 30px;
    .el-form-item__content {
      height: 51px;
      .el-input {
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 2px;
        height: 100%;
        .el-input__inner {
          vertical-align: bottom;
          padding-top: 16px;
          height: 36px;
          line-height: 36px;
          background: none;
          outline: none;
          border: none;
          font-size: 15px;
          color: #fafafa;
        }
        .el-input__suffix {
          top: 1px;
        }
      }
      .el-button {
        width: 100%;
        height: 90%;
      }
    }
  }
}
</style>

<style lang="less" scoped>
.login-wrap {
  width: 100%;
  min-height: 100%;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: #3c3c3c;
  .el-form {
    padding-top: 180px;
    width: 100%;
    max-width: 490px;
    margin: auto;
    .title {
      text-align: center;
      font-weight: normal;
      color: #fafafa;
    }
    .login-box {
      padding: 40px 40px 0;
      margin-top: 40px;
      // border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 3px;
      height: 360px;
      text-align: center;
      // background-color: rgba(255, 255, 255, 0.2);
      // .title {
      //   line-height: 80px;
      //   font-size: 24px;
      //   color: #fff;
      // }
    }
  }
}
</style>
