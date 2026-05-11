<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <div id="menu">
        <RouterLink class="btn menu-link border-pixel-sm" to="/">
            <!-- https://feathericons.dev/?search=home&iconset=feather -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
        </RouterLink>
        <RouterLink class="btn menu-link border-pixel-sm" to="/ngobrol">
            <!-- https://feathericons.dev/?search=message-circle&iconset=feather -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Ngobrol
        </RouterLink>
        <RouterLink class="btn menu-link border-pixel-sm" to="/harmony">
            <!-- https://feathericons.dev/?search=heart&iconset=feather -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Harmony
        </RouterLink>
    </div>
</template>
<style scoped>
#menu {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    padding: 1rem;
    background-color: var(--neutral-100);
    color: var(--primary-900);
    font-weight: bold;
    font-size: 1.25rem;
    position: sticky;
    bottom: 0;
    z-index: 999;
    border-top: 5px solid var(--black-500);
}

.menu-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--black-300);
    padding: 0.5rem;
    width: 6rem;
}
.menu-link.router-link-exact-active {
    background-color: var(--primary-900);
    color: var(--neutral-100);
}
</style>