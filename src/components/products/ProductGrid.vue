<script setup lang="ts">
import ProductWidget from './ProductWidget.vue'
const props = defineProps(['data'])
</script>
<template>
    
        <div class="product-grid">
            <ProductWidget v-for="item in props.data" :key="item.id" :name="item.name" :price="item.price" inStock=true, :cover="item.cover"/>
        </div>
</template>

<style scoped>
.product-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2%;
    width: 80%;
    margin: 0 auto;
}
</style>
