<template>
  <div class="main-layout">
    <!-- 顶部菜单 -->
    <header class="top-menu">
      <nav class="top-menu-nav">
        <button
          v-for="item in topMenus"
          :key="item.id"
          class="top-menu-item"
          :class="{ active: item.id === currentGroup }"
          @click="goGroup(item.id)"
        >
          {{ item.name }}
        </button>
      </nav>
    </header>

    <div class="body-area">
      <!-- 左侧菜单（可折叠） -->
      <aside class="submenu-panel" :class="{ collapsed: isCollapsed }">

        <!-- 标题（折叠时隐藏） -->
        <h3 class="submenu-title" v-if="!isCollapsed">
          {{ currentGroup }}
        </h3>

        <!-- 菜单列表 -->
        <ul class="submenu-list">
          <li
            v-for="item in leftMenus"
            :key="item.path"
            class="submenu-item"
            :class="{ active: route.path === fullPath(item.path) }"
            @click="router.push(fullPath(item.path))"
          >
            <span v-if="!isCollapsed">{{ item.meta.subtitle }}</span>
            <span v-else>{{ item.meta.subtitle.slice(0, 1) }}</span>
          </li>
        </ul>

        <!-- 底部折叠按钮（图标化） -->
        <div class="collapse-btn" @click="toggleCollapse">
          <span class="icon">
            {{ isCollapsed ? '▶' : '◀' }}
          </span>
        </div>
      </aside>

      <!-- 内容区域 -->
      <main class="content-area">
        <router-view />
      </main>
    </div>

    <footer-links></footer-links>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import FooterLinks from "./FooterLinks.vue";

const router = useRouter();
const route = useRoute();

/* 左侧折叠状态 */
const isCollapsed = ref(false);
function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
}

/* 所有 /main 子路由 */
const childRoutes =
  router.options.routes.find((r) => r.path === "/main")?.children || [];

/* 当前分组 */
const currentGroup = computed(() => route.meta?.group);

/* 顶部菜单 */
const topMenus = computed(() => {
  const map = {};
  childRoutes.forEach((r) => {
    if (r.meta?.group) {
      map[r.meta.group] = r.meta.groupName;
    }
  });
  return Object.keys(map).map((key) => ({
    id: key,
    name: map[key],
  }));
});

/* 左侧菜单 */
const leftMenus = computed(() => {
  return childRoutes.filter((r) => r.meta?.group === currentGroup.value);
});

/* 拼接路径 */
function fullPath(path) {
  return "/main/" + path;
}

/* 切换顶部菜单 */
function goGroup(group) {
  const first = childRoutes.find((r) => r.meta?.group === group);
  if (first) {
    router.push("/main/" + first.path);
  }
}
</script>

<style scoped>
.main-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f5f7fa;
}

/* 顶部菜单 */
.top-menu {
  flex-shrink: 0;
  background: linear-gradient(-45deg, #6bffe9, #8e44ad, #409eff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.top-menu-nav {
  display: flex;
  gap: 6px;
  padding: 0 24px;
}

.top-menu-item {
  padding: 16px 20px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.2s;
}

.top-menu-item:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.top-menu-item.active {
  color: #fff;
  border-bottom-color: #42b983;
  background: rgba(255, 255, 255, 0.1);
}

/* 主体区域 */
.body-area {
  flex: 1;
  display: flex;
  min-height: 0;
  padding: 16px;
  overflow: hidden;
}

/* 左侧菜单 */
.submenu-panel {
  width: 240px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 8px 0 0 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  transition: width 0.25s ease;
}

/* 折叠状态 */
.submenu-panel.collapsed {
  width: 70px;
}

/* 标题 */
.submenu-title {
  margin: 0;
  padding: 16px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #606266;
  border-bottom: 1px solid #eee;
}

/* 菜单列表 */
.submenu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
}

.submenu-item {
  padding: 12px 18px;
  font-size: 14px;
  color: #303133;
  cursor: pointer;
  border-left: 3px solid transparent;
  transition: all 0.2s;
}

.submenu-item:hover {
  background: #f5f7fa;
  color: #42b983;
}

.submenu-item.active {
  background: #ecf9f3;
  color: #42b983;
  border-left-color: #42b983;
  font-weight: 500;
}

/* 折叠时菜单项居中 */
.submenu-panel.collapsed .submenu-item {
  text-align: center;
  padding: 12px 0;
}

/* 折叠时隐藏左侧高亮条 */
.submenu-panel.collapsed .submenu-item.active {
  border-left-color: transparent;
}

/* 底部折叠按钮（图标化） */
.collapse-btn {
  padding: 14px 0;
  text-align: center;
  cursor: pointer;
  background: #f0f0f0;
  border-top: 1px solid #ddd;
  user-select: none;
  transition: background 0.2s;
}

.collapse-btn:hover {
  background: #e6e6e6;
}

.collapse-btn .icon {
  font-size: 18px;
  color: #606266;
  display: inline-block;
  transition: transform 0.25s ease;
}

/* 内容区域 */
.content-area {
  flex: 1;
  min-width: 0;
  min-height: 0;
  padding: 24px;
  overflow: auto;
  background: #fff;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
</style>
