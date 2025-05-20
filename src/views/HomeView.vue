<script setup lang="ts">
import CategoryGrid from '@/components/categories/CategoryGrid.vue'
import { api } from '@/assets/data/api'
import axios from "axios"
const categories = await axios.get(api + "/categories")
</script>

<template>
  <main>
    <input type="text" placeholder="Rechercher un produit">
    <div>
      <!-- Categories -->
      <div>
        <CategoryGrid :data="categories.data.data" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
input {
    width: 70%;
    margin: 2% auto;
}
</style>