<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import logo from '@/assets/img/logo.png'
import tasbih from '@/assets/img/tasbih.png'
import sholawat from '@/assets/img/sholawat.png'
import dzikir from '@/assets/img/dzikir.png'
</script>

<template>
    <div id="menu">
        <div id="submenu" class="glass">
            <RouterLink to="/" class="menu-logo-wrapper glass" active-class="active-menu">
                <img :src="tasbih" alt="tasbih" class="menu-logo" />
            </RouterLink>
            <RouterLink to="/dzikir" class="menu-logo-wrapper glass" active-class="active-menu">
                <img :src="dzikir" alt="dzikir" class="menu-logo" />
            </RouterLink>
            <RouterLink to="/sholawat" class="menu-logo-wrapper glass" active-class="active-menu">
                <img :src="sholawat" alt="sholawat" class="menu-logo" />
            </RouterLink>
        </div>
        <div id="mainmenu" class="glass">
            <div class="menu-logo-wrapper glass">
                <!-- https://feathericons.dev/?search=menu&iconset=feather -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2">
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
#menu {
    color: var(--vt-c-black-soft);
    display: flex;
    align-items: center;
    position: sticky;
    bottom: 1rem;
    z-index: 999;
    margin-top: 1rem;
    gap: 10px;
}

#submenu {
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
}

#mainmenu {
    border-radius: 100px;
    display: flex;
    align-items: center;
    padding: 10px;
    color: var(--app-green-3);
}

.menu-logo-wrapper {
    border-radius: 100px;
    height: 60px;
    width: 60px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-logo {
    height: 70%;
    width: 70%;
    object-fit: cover;
    border-radius: 100px;
}

#menu-title-wrapper {
    margin-left: 10px;
    color: var(--app-green-3);
}

.active-menu {
    background-color: var(--app-green-3);
}
</style>