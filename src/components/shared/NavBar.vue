<script setup>
import { ref, watch } from 'vue';
const isCollapsed = ref(true);
const emit = defineEmits(['collapse-change']);

watch(isCollapsed, (newValue) => {
    emit('collapse-change', newValue);
});
</script>

<template>
    <div class="sidebar bg-dark" :class="{ 'collapsed': isCollapsed }" @mouseenter="isCollapsed = false"
        @mouseleave="isCollapsed = true">
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white">
            <RouterLink to="/" class="d-flex align-items-center mb-3 mb-md-0 text-white text-decoration-none">
                <span class="fs-4" v-show="!isCollapsed">Kardinal</span>
                <span class="fs-4" v-show="isCollapsed">K</span>
            </RouterLink>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <RouterLink to="/" class="nav-link text-white d-flex align-items-center" active-class="active"
                        :title="isCollapsed ? 'Home' : ''">
                        <i class="bi bi-house"></i>
                        <span class="ms-2" v-show="!isCollapsed">Home</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/dashboard" class="nav-link text-white d-flex align-items-center"
                        active-class="active" :title="isCollapsed ? 'Dashboard' : ''">
                        <i class="bi bi-speedometer2"></i>
                        <span class="ms-2" v-show="!isCollapsed">Dashboard</span>
                    </RouterLink>
                </li>
            </ul>
            <hr>
            <div class="dropdown" v-show="!isCollapsed">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/insertusernamed.png" alt="" width="32" height="32"
                        class="rounded-circle me-2">
                    <strong>User</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.2s ease;
    width: 280px;
    z-index: 1000;
}

.sidebar.collapsed {
    width: 80px;
}

.sidebar.collapsed .nav-link {
    padding: 0.8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sidebar.collapsed .nav-link i {
    font-size: 1.2rem;
}

.sidebar:hover {
    width: 280px;
}

.sidebar:hover .nav-link {
    justify-content: flex-start;
    padding: 0.5rem 1rem;
}

.sidebar:hover .nav-link i {
    margin-right: 0.5rem !important;
}

.nav-link {
    margin: 0.2rem 0;
    border-radius: 4px;
    transition: all 0.2s ease;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
}

.nav-link.active {
    background-color: #0d6efd;
    position: relative;
}

.nav-link.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: #fff;
    border-radius: 0 4px 4px 0;
}

.sidebar.collapsed .nav-link.active::before {
    width: 4px;
}

.nav-link.active {
    background-color: #0d6efd;
}
</style>