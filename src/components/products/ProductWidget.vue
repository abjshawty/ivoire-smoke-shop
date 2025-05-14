<script setup lang="ts">
const item = defineProps(['name','price','cover'])
</script>
<template>
<div>
   <img :src="item.cover" alt="YUSTYNA >>>">
   <p>{{ item.name || "Loading..."}}</p>
   <p>{{ item.price || 0 }}</p>
</div>
</template>

<style scoped>

</style>
