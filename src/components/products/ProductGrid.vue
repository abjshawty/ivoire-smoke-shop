<script setup lang="ts">
import ProductWidget from './ProductWidget.vue'
</script>
<template>
    
        <div class="product-grid">
            <ProductWidget v-for="product in 64" :key="product" :product="{name: 'Product Name', price: 100, originalPrice: 150, inStock: true, isNew: true, imageUrl: '@/assets/images/chicha.jpg'}"/>
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
