<script setup lang="ts">
const props = defineProps(['name', 'cover'])
</script>

<template>
    <!-- Todo: Eliminate gap -->
    <div class="category-widget" @click="$router.push('/category/1')">
        <img :src="props.cover" alt="Category Cover">
        <div class="category-widget-text">
            <h3>{{ props.name }}</h3>
        </div>
    </div>
</template>

<style scoped>
.category-widget {
    display: grid;
    background-color: red;
    border-radius: 10px;
    cursor: pointer;
}
.category-widget img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.category-widget-text {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary);
    height: 100%
}
.category-widget-text h3 {
    text-align: center;
    /* margin: auto */
}
</style>