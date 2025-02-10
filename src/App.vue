<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/shared/NavBar.vue'
</script>

<template>
    <div class="app-wrapper">
        <NavBar />
        <div class="content-wrapper">
            <RouterView />
        </div>
    </div>
</template>

<style>
.app-wrapper {
    display: flex;
    min-height: 100vh;
    width: 100%;
    background-color: var(--light-gray);
}

.content-wrapper {
    flex: 1;
    padding: 1rem;
    overflow-x: hidden;
    background-color: white;
    min-height: 100vh;
}
</style>