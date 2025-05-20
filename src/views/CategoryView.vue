<script setup lang="ts">
import axios from "axios"
import ProductGrid from '@/components/products/ProductGrid.vue'
import { api } from '@/assets/data/api'
const products = await axios.get(api + "/products")
</script>

<template>
    <div>
        <h1>Cat</h1>
        <div>
            <ProductGrid :data="products.data.data"/>
        </div>
    </div>
</template>