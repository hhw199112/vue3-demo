<template>
  <div class="welcome-page">
    <!-- 背景动画层 -->
    <div class="bg"></div>

    <!-- 内容 -->
    <div class="content">
      <div class="title">Vue 3 Learning System</div>

      <div class="subtitle">一个用于学习 Vue3 Composition API 的实验性项目</div>

      <div class="card">
        <h2>✨ Vue 3 核心特性</h2>

        <ul>
          <li>🚀 Composition API（组合式API）</li>
          <li>⚡ Proxy 响应式系统</li>
          <li>🧩 Teleport / Suspense</li>
          <li>📦 Pinia 状态管理</li>
          <li>🧠 更清晰的逻辑组织方式</li>
        </ul>
      </div>

      <div class="loading">正在进入系统中...</div>
    </div>
  </div>
</template>
  
  <script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/main"); // 跳转主页面
  }, 5000); // 2.5秒后跳转
});
</script>
  
  <style scoped>
.welcome-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: "Microsoft YaHei", sans-serif;
}

/* 动态背景 */
.bg {
  position: absolute;
  width: 200%;
  height: 200%;
  background: linear-gradient(-45deg, #42b983, #409eff, #8e44ad, #6bffe9);
  background-size: 400% 400%;
  animation: gradientMove 8s ease infinite;
  filter: blur(0px);
  z-index: 0;
}

@keyframes gradientMove {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-10%, -10%);
  }
  100% {
    transform: translate(0, 0);
  }
}

/* 内容层 */
.content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  animation: fadeIn 1.2s ease;
}

/* 标题 */
.title {
  font-size: 42px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

/* 副标题 */
.subtitle {
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 30px;
}

/* 卡片 */
.card {
  width: 420px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: left;
}

.card h2 {
  margin-bottom: 10px;
}

.card ul {
  padding-left: 20px;
}

.card li {
  margin: 8px 0;
}

/* loading */
.loading {
  margin-top: 25px;
  font-size: 14px;
  opacity: 0.8;
  animation: blink 1.2s infinite;
}

/* 动画 */
@keyframes blink {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>