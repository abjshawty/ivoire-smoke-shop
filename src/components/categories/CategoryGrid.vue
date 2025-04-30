<script setup lang="ts">
import CategoryWidget from './CategoryWidget.vue'
</script>
<template>
    
        <div class="category-grid">
            <CategoryWidget />
            <CategoryWidget />
            <CategoryWidget />
            <CategoryWidget />
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
