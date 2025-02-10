<template>
    <nav class="sidebar">
        <div class="logo">
            <h2>K</h2>
        </div>
        <div class="nav-items">
            <RouterLink to="/" class="nav-item">
                <span class="material-icons">dashboard</span>
                <span class="nav-text">Boards</span>
            </RouterLink>
            <RouterLink to="/settings" class="nav-item">
                <span class="material-icons">settings</span>
                <span class="nav-text">Settings</span>
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>
.sidebar {
    width: 80px;
    background-color: var(--light-gray);
    height: 100vh;
    padding: 1rem;
    border-right: 1px solid var(--gray);
}

.logo {
    text-align: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--gray);
}

.logo h2 {
    margin: 0;
}

.nav-items {
    margin-top: 2rem;
}

.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0;
    text-decoration: none;
    color: var(--black);
    border-radius: 4px;
}

.nav-item:hover {
    background-color: var(--gray);
}

.nav-item.router-link-active {
    background-color: var(--cardinal-red);
    color: white;
}

.nav-text {
    display: none;
}

.material-icons {
    font-size: 24px;
}
</style>