<script setup lang="ts">
import {ref} from "vue"
import CategoryWidget from './CategoryWidget.vue'
const items = ref([
    { name: 'Category 1', cover: "chicha.jpg" },
    { name: 'Category 2', cover: "cigar.jpeg" }
    ])
</script>
<template>
        <div class="category-grid">
            <CategoryWidget v-for="item in items" :key="item.name" :name="item.name" :cover="item.cover"/>
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
