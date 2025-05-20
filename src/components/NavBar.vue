<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="nav">
        <div class="logo">
            <RouterLink to="/">
                <!-- <img src="@/assets/images/logo.avif" alt="Logo"> -->
                <img src="https://ik.imagekit.io/abjshawty/ivoire-smoke-shop/logo.avif" alt="Logo">
            </RouterLink>
        </div>
        <div>
            <span class="material-icons right-padded">shopping_cart</span>
        </div>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary);
    color: var(--text);
    width: 100%;
}

.logo {
    width: 50px;
    height: 50px;
}
.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.right-padded {
    padding-right: 2rem;
}
</style>
