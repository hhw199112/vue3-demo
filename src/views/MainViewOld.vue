<template>
  <div class="main-layout">
    <header class="top-menu">
      <nav class="top-menu-nav">
        <button
          v-for="menu in menus"
          :key="menu.id"
          class="top-menu-item"
          :class="{ active: activeMenuId === menu.id }"
          @click="selectMenu(menu.id)"
        >
          {{ menu.label }}
        </button>
      </nav>
    </header>

    <div class="body-area">
      <aside v-if="activeMenu" class="submenu-panel">
        <h3 class="submenu-title">{{ activeMenu.id }}</h3>
        <ul class="submenu-list">
          <li
            v-for="item in activeMenu.children"
            :key="item.id"
            class="submenu-item"
            :class="{ active: activeSubmenuId === item.id }"
            @click="selectSubmenu(item.id)"
          >
            {{ item.label }}
          </li>
        </ul>
      </aside>

      <main class="content-area">
         
          <component v-if="activeComponent" :is="activeComponent" />
          <div v-else class="content-placeholder">
            <p>请从左侧子菜单选择要查看的内容</p>
          </div>
        
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, defineProps } from "vue";

const props = defineProps({
  menus: {
    type: Array,
    required: true,
  },
});

const activeMenuId = ref(null);
const activeSubmenuId = ref(null);

const activeMenu = computed(
  () => props.menus.find((menu) => menu.id === activeMenuId.value) ?? null
);

const activeComponent = computed(() => {
  if (!activeMenu.value || !activeSubmenuId.value) return null;
  const item = activeMenu.value.children.find(
    (child) => child.id === activeSubmenuId.value
  );
  return item?.component ?? null;
});

function selectMenu(menuId) {
  if (activeMenuId.value === menuId) return;
  activeMenuId.value = menuId;
  const menu = props.menus.find((item) => item.id === menuId);
  activeSubmenuId.value = menu?.children[0]?.id ?? null;
}

function selectSubmenu(submenuId) {
  activeSubmenuId.value = submenuId;
}

onMounted(() => {
  if (props.menus.length > 0) {
    selectMenu(props.menus[0].id);
  }
});
</script>

<style scoped>
.main-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f5f7fa;
}

.top-menu {
  flex-shrink: 0;
  background: #2c3e50;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.top-menu-nav {
  display: flex;
  gap: 4px;
  padding: 0 24px;
}

.top-menu-item {
  padding: 16px 24px;
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

.body-area {
  flex: 1;
  display: flex;
  min-height: 0;
  padding: 16px;
  overflow: hidden;
}

.content-area {
  flex: 1;
  min-height: 0;
  min-width: 0;
  padding: 24px;
  overflow: auto;
  background: #fff;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.content-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #909399;
  font-size: 16px;
}

.submenu-panel {
  width: 220px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 8px 0 0 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  padding: 20px 0;
  overflow-y: auto;
}

.submenu-title {
  margin: 0 0 12px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 600;
  color: #606266;
}

.submenu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.submenu-item {
  padding: 12px 20px;
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
</style>
