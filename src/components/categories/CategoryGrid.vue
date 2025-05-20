<script setup lang="ts">
import {ref} from "vue"
import CategoryWidget from './CategoryWidget.vue'
const data = defineProps(['data'])
const items =data.data
console.log(items)
</script>
<template>
        <div class="category-grid">
            <CategoryWidget v-for="item in items" :key="item.id" :name="item.name" :cover="item.cover"/>
        </div>
</template>

<style scoped>
.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2%;
    width: 70%;
    margin: 0 auto;
}
</style>
