<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
const route = useRoute()
import listDzikirJson from "@/assets/data/dzikir.json"
const dzikirData = ref(null)
const imgDzikirBanner = ref('')
const dzikirName = ref('')

onMounted(async () => {
    const id = Number(route.params.id)

    const dzikir = listDzikirJson.find(d => d.id === id)

    if (dzikir) {
        dzikirName.value = dzikir.name
        const data = await import(`@/assets/data/${dzikir.json}.json`)
        dzikirData.value = data.default
        imgDzikirBanner.value = new URL(
            `/src/assets/img/${dzikir.imgName}`,
            import.meta.url
        ).href
    }
})
</script>
<template>
    <div id="dzikir-detail">
        <div id="greeting-wrapper">
            <img :src="imgDzikirBanner" alt="dzikir banner" class="banner-img glass" />
            <div class="banner-title">
                <RouterLink :to="'/dzikir'" class="btn-link glass">
                    <!-- https://feathericons.dev/?search=chevrons-left&iconset=feather -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                        class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2">
                        <polyline points="11 17 6 12 11 7" />
                        <polyline points="18 17 13 12 18 7" />
                    </svg>
                </RouterLink>
                <h3 class="banner-text glass">{{ dzikirName }}</h3>
            </div>
        </div>
        <div v-if="dzikirData">
            <div v-for="item in dzikirData" :key="item.id" id="dzikir-item">
                <div class="dzikir-card">
                    <h3 style="font-weight: 500; margin-bottom: 10px;">{{ item.title }}</h3>
                    <p style="font-size: 1.2em; font-weight: bold; text-align: right;margin-bottom:8px;">{{ item.arabic
                        }}</p>
                    <p style="margin-bottom:8px;">{{ item.latin }}</p>
                    <p style="font-weight: lighter; font-style: italic;">"{{ item.translation }}"</p>
                </div>
                <div class="dzikir-sub-card">
                    <p style="font-weight: lighter; font-style: italic;">"{{ item.fawaid }}" - "{{ item.source }}"</p>
                </div>
            </div>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>
<style scoped>
#dzikir-item {
    background-color: var(--vt-c-white);
    padding: 10px;
    margin-top: 10px;
    border-radius: 16px;
}

.dzikir-card {
    background-color: var(--app-green-3);
    border-radius: 8px;
    padding: 10px;
    margin-top: 10px;
    color: var(--vt-c-white)
}

#dzikir-detail {
    min-height: 100vh;
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

.banner-title {
    position: absolute;
    bottom: 20px;
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.banner-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-align: center;
    padding: 0 20px;
    color: var(--vt-c-black);
    width: 80%;
    border-radius: 16px;
    min-height: 50px;
}

.btn-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    background-color: var(--app-green-5);
    color: var(--vt-c-white);
    text-decoration: none;
    opacity: 0.8;
}
</style>