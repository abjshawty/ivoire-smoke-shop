<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import defaultTheme from './assets/methods/default-theme';
defaultTheme();
</script>

<template>
  <header>
    <NavBar />
  </header>
  <Suspense>
  <RouterView class="view"/>
  <template #fallback>
            <h1>Todo</h1>
        </template>
    </Suspense>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.view {
    margin-top: 5rem;
}
</style>