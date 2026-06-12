<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo">Vue3 Admin</div>

      <div class="sub-title">后台管理系统</div>

      <div class="form-item">
        <input v-model="form.userName" placeholder="请输入用户名" />
      </div>

      <div class="form-item">
        <input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        />
      </div>

      <div class="option-row">
        <label>
          <input type="checkbox" v-model="remember" />

          记住密码
        </label>

        <a href="javascript:void(0)"> 忘记密码？ </a>
      </div>

      <button class="login-btn" @click="login">登 录</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const remember = ref(false);
const router = useRouter();
const form = reactive({
  userName: "",

  password: "",
});

function login() {
  if (!form.userName) {
    alert("请输入用户名");

    return;
  }

  if (!form.password) {
    alert("请输入密码");

    return;
  }

  alert("登录成功！");
  router.push("/main");
}
</script>

<style scoped>
/* 防止出现滚动条 */

:global(html),
:global(body),
:global(#app) {
  width: 100%;

  height: 100%;

  margin: 0;

  padding: 0;

  overflow: hidden;
}

/* 页面 */

.login-container {
  position: relative;

  left: 0;

  top: 0;

  width: 100vw;

  height: 100vh;

  display: flex;

  justify-content: center;

  align-items: center;

  background: linear-gradient(135deg, #409eff, #67c23a);

  overflow: hidden;
}

/* 登录框 */

.login-box {
  width: 400px;

  background: white;

  border-radius: 10px;

  padding: 40px;

  box-sizing: border-box;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.18);
}

/* Logo */

.logo {
  text-align: center;

  font-size: 30px;

  font-weight: bold;

  color: #409eff;
}

/* 副标题 */

.sub-title {
  margin-top: 8px;

  margin-bottom: 35px;

  text-align: center;

  color: #909399;

  font-size: 14px;
}

/* 输入框 */

.form-item {
  margin-bottom: 20px;
}

.form-item input {
  width: 100%;

  height: 42px;

  padding: 0 14px;

  box-sizing: border-box;

  border: 1px solid #dcdfe6;

  border-radius: 6px;

  outline: none;

  transition: 0.2s;
}

.form-item input:focus {
  border-color: #409eff;
}

/* 记住密码 */

.option-row {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 20px;

  font-size: 13px;

  color: #606266;
}

.option-row a {
  text-decoration: none;

  color: #409eff;
}

/* 登录按钮 */

.login-btn {
  width: 100%;

  height: 44px;

  border: none;

  border-radius: 6px;

  background: #409eff;

  color: white;

  font-size: 16px;

  cursor: pointer;

  transition: 0.3s;
}

.login-btn:hover {
  background: #66b1ff;
}

/* 小屏适配 */

@media (max-width: 480px) {
  .login-box {
    width: 90%;

    padding: 30px 20px;
  }
}
</style>

