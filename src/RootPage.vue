<template>
  <div class="app-container">
    <router-view />

    <!-- 美化后的隐私政策链接 -->
    <div class="footer" v-show="show">
      <router-link to="/privacy" class="privacy-link">
        隐私政策（Privacy Policy）
      </router-link>
    </div>
  </div>
</template>
<script setup>
import {ref,watch} from 'vue';
import { useRoute } from 'vue-router';
const show=ref(true);
const route=useRoute();
// 根据当前路由判断是否显示
const updateShow = () => {
  // 示例：当路由是 /privacy 时隐藏 footer
  show.value=false;
  //show.value = route.path !== '/privacy'
}

// 初始化判断
updateShow()

// 监听路由变化
watch(
  () => route.path,
  () => updateShow()
)

</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

#app {
  height: 100%;
  overflow: hidden;
}

.app-container {
  height: 100%;
  overflow: hidden;
}

/* ⭐ 美化后的底部链接 */
.footer {
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
}

.privacy-link {
  font-size: 14px;
  color: #888;
  text-decoration: none;
  /*padding: 6px 12px;*/
  border-radius: 6px;
  line-height: 14px;
  transition: all 0.25s ease;
  margin-top: 0px;
  
}

.privacy-link:hover {
  color: #42b983;
  background: rgba(66, 185, 131, 0.12);
  transform: translateY(-2px);
}
</style>
