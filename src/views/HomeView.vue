<script setup lang="ts">
import CategoryGrid from '@/components/categories/CategoryGrid.vue'
</script>

<template>
  <main>
    <input type="text" placeholder="Rechercher un produit">
    <div>
      <!-- Categories -->
      <div>
        <CategoryGrid />
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