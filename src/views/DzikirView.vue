<script setup lang="ts">
import { RouterLink } from 'vue-router'
import imgSetelahSholat from "@/assets/img/setelah-sholat.jpg"
import imgPagi from "@/assets/img/pagi.png"
import imgPetang from "@/assets/img/petang.png"
import imgHarian from "@/assets/img/harian.jpg"
import imgDzikirBanner from "@/assets/img/dzikir-banner.jpg"
const listDzikir = [
    { id: 1, name: "Dzikir Setelah Sholat", img: imgSetelahSholat },
    { id: 2, name: "Dzikir Pagi", img: imgPagi },
    { id: 3, name: "Dzikir Petang", img: imgPetang },
    { id: 4, name: "Dzikir Harian", img: imgHarian },
]
</script>
<template>
    <div id="dzikir">
        <div id="greeting-wrapper">
            <img :src="imgDzikirBanner" alt="dzikir banner" class="banner-img glass" />
            <h3 class="banner-text">Dalam setiap tarikan nafas, aku mengingat-Mu, ya Allah.</h3>
        </div>
        <div v-for="dzikir in listDzikir" :key="dzikir.id" class="dzikir-wrapper">
            <div>
                <img :src="dzikir.img" :alt="dzikir.name" class="card-img glass" />
            </div>
            <div class="card-text-list">
                <h3 class="card-text">{{ dzikir.name }}</h3>
                <RouterLink :to="`/dzikir/${dzikir.id}`" class="btn-link">
                    <!-- https://feathericons.dev/?search=chevrons-right&iconset=feather -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                        class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2">
                        <polyline points="13 17 18 12 13 7" />
                        <polyline points="6 17 11 12 6 7" />
                    </svg>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<style scoped>
#dzikir {
    min-height: 100vh;
}

.dzikir-wrapper {
    background-color: var(--vt-c-white);
    padding: 10px;
    margin-top: 10px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
}

#greeting-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--vt-c-white);
    font-family: "Lato", sans-serif !important;
    font-weight: 300;
    font-size: 1.2rem;
    font-style: bold;
    height: 230px;
    width: 100%;
    border-radius: 16px;
    position: relative;
}

.banner-img {
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
    object-fit: cover;
    border-radius: 16px;
}

.banner-text {
    position: absolute;
    bottom: 20px;
    font-size: 1.2rem;
    text-align: center;
    padding: 0 20px;
    color: var(--vt-c-black);
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
}

.card-img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.card-text-list {
    padding: 10px;
    background-color: rgba(0, 166, 81, 0.2);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: row;
}

.card-text {
    font-family: "Lato", sans-serif !important;
    font-weight: 600;
    font-size: 1.2rem;
    font-style: bold;
    color: var(--app-green-5);
}

.btn-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--app-green-5);
    color: var(--vt-c-white);
    text-decoration: none;
}
</style>