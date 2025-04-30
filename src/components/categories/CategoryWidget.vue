<script setup lang="ts">
// import { useRouter } from 'vue-router'
// const router = useRouter()
</script>

<template>
    <!-- Todo: Eliminate gap -->
    <div class="category-widget" @click="$router.push('/category/1')">
        <img src="@/assets/images/chicha.jpg" alt="CategoryName">
        <div class="category-widget-text">
            <h2>CategoryName</h2>
        </div>
    </div>
</template>

<style scoped>
.category-widget {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
}
.category-widget img {
    width: 100%;
    object-fit: cover;
}
.category-widget-text {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary);
}
.category-widget-text h2 {
    text-align: center;
}
</style>