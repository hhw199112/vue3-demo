<template>
    <div>
        this is ComponetB<br/>
        the currentTime is {{ txt }}
    </div>
</template>
<script setup>
import {format} from 'date-fns'
import { ref } from 'vue';
const now=new Date();
const txt=ref("")
txt.value=format(now,"yyyy-MM-dd HH:mm:ss");

</script>

<style scoped>
div{
    border: solid 1px blue;
    width: 400px;
    height: 50px;
}
</style>