<script setup lang="ts">
import logo from '@/assets/img/logo.png'
let now = new Date()
let hours = now.getHours()
let greeting = ''
if (hours < 12) {
    greeting = 'Selamat Pagi!'
} else if (hours < 18) {
    greeting = 'Selamat Sore!'
} else {
    greeting = 'Selamat Malam!'
}
</script>

<template>
    <header class="glass">
        <div id="header-logo-wrapper" class="glass">
            <img :src="logo" alt="logo" id="header-logo" />
        </div>
        <div id="header-title-wrapper">
            <h1>Hallo Umat!</h1>
            <h4 id="header-subtitle">{{ greeting }}</h4>
        </div>
    </header>
</template>

<style scoped>
header {
    color: var(--vt-c-black-soft);
    padding: 10px 10px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
    position: sticky;
    top: 1rem;
    z-index: 999;
    margin-bottom: 1rem;
    padding-left: 1rem;
}

#header-logo-wrapper {
    border-radius: 100px;
    height: 60px;
    width: 60px;
    padding: 2px;
}

#header-logo {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 100px;
}

#header-title-wrapper {
    margin-left: 10px;
    color: var(--app-green-3);
}
</style>