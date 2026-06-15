<template>
  <Teleport to="body">
    <div v-if="props.visible" class="mask" @click="close">
      <div class="dialog" @click.stop>
        <slot></slot>

        <div class="footer">
          <button @click="close">关闭</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
    
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  visible: {
    type:Boolean,
    default:false
}})

const emit = defineEmits(["close"]);

function close() {
  emit("close");
}
</script>
    
    <style scoped>
.mask {
  position: fixed;

  left: 0;

  top: 0;

  right: 0;

  bottom: 0;

  background: rgba(0, 0, 0, 0.4);

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 9999;
}

.dialog {
  width: 400px;

  background: white;

  padding: 20px;

  border-radius: 8px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.footer {
  margin-top: 20px;

  text-align: right;
}

button {
  padding: 6px 15px;
}
</style>