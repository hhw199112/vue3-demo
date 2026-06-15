<template>
    <div>
        <button @click="show">子组件点击</button>
        <span id="spanText"></span>
        <div>{{ val }}</div>
    </div>
</template>
<script setup>
import {defineExpose,ref} from 'vue'
//npm install date-fns
import { format } from "date-fns"
const now=new Date();
const year=format(now,"yyyy年");
const val=ref("年份："+year);
function show(){ 
    let now=new Date();
    let tip=format(now,"yyyy-MM-dd HH:mm:ss");
    document.getElementById("spanText").innerText="显示当前时间："+tip;
}
defineExpose({
    show,
    val    
})
</script>
