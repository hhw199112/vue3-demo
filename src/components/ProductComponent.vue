<template>
    <div>
        <ul>
            <li>产品名称：{{ props.name }}</li>
            <li>产品价格：{{ props.price }}</li>
            <li>产品型号：{{ props.model }}</li>
            <li>产品详情：{{ props.defatil}}</li>
        </ul>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props=defineProps({
    name:{
        type:String,
        default:"未知"
    },
    price:{
        type:String,
        default:"未知"
    },
    model:{
        type:String,
        default:"未知"
    },
    defatil:{
        type:String,
        default:"未知"
    }
})
</script>
