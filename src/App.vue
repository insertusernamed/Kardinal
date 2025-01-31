<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/shared/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const isNavCollapsed = ref(true);

const handleCollapseChange = (collapsed) => {
    isNavCollapsed.value = collapsed;
}
</script>

<template>
    <div class="app-wrapper">
        <NavBar @collapse-change="handleCollapseChange" />
        <div class="content-wrapper" :class="{ 'expanded': !isNavCollapsed }">
            <RouterView />
        </div>
    </div>
</template>

<style>
.app-wrapper {
    display: flex;
    min-height: 100vh;
}

.content-wrapper {
    margin-left: 80px;
    padding: 1rem;
    flex: 1;
    transition: all 0.2s ease;
    position: relative;
}

.content-wrapper.expanded {
    margin-left: 280px;
}

@media (max-width: 768px) {
    .content-wrapper {
        margin-left: 80px;
        width: 100%;
    }

    .content-wrapper.expanded {
        margin-left: 80px;
    }
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    color: white;
}
</style>