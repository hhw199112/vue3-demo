<template>
  <div>
    <p>编号：{{ props.id }}</p>
    <div>
      <ul>
        <li><button @click="ClickBtnSend">Send</button></li>
        <li><button @click="ClickBtnDelete">Delete</button></li>
        <li><button @click="ClickBtnDeleteWithId">DeleteWithId</button></li>
        <li><button @click="DeleteByPropsId">根据属性删除</button></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["send", "delete", "deleteWithId", "deleteByPropsId"]);
const props = defineProps({
  id: {
    type: String,
    default: "未知",
  },
});

function ClickBtnSend() {
  emit("send");
}
function ClickBtnDelete() {
  emit("delete");
}
function ClickBtnDeleteWithId() {
  emit("deleteWithId", 1);
}

function DeleteByPropsId() {
  emit("deleteByPropsId", props.id);
}
</script>
<style scoped>
button{
    width: 120px;
    height: 28px;
    cursor: pointer;
}
</style>
