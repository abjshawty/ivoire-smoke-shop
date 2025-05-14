<script setup lang="ts">
import axios from "axios"
import ProductGrid from '@/components/products/ProductGrid.vue'
const products = await axios.get("http://127.0.0.1:3006/v0/product")
// console.log(products.data.data.length)
// const props = defineProps(['name'])
</script>
<template>
    <div>
        <h1>Cat</h1>
        <div>
            <ProductGrid :data="products.data.data"/>
        </div>
    </div>
</template>