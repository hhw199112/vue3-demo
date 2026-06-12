<template>
    <div>
        <div>{{ injectData.name }}+"-----"+{{ injectData.age }}</div>
        <div></div>
    </div>
    <ProvideCompoent></ProvideCompoent>
</template>
<script setup>
import {inject } from 'vue';
import ProvideCompoent from './Level3/ViewProvide.vue';


const injectData=inject("dataOrginal")
</script>
