<script setup lang="ts">
import { ref } from 'vue'
import imgTasbihCard from "@/assets/img/tasbih-card.png"
import jsonListTasbih from "@/assets/data/tasbih.json"
import TasbihListComponent from "@/components/tasbih/TasbihListComponent.vue"

interface Tasbih {
    id: number
    name: string
    arabic: string
    latin: string
    translation: string
    count?: number
}

const tasbihList = ref<Tasbih[]>(jsonListTasbih as Tasbih[])

const handleIncrement = (id: number) => {
    const tasbih = tasbihList.value.find(t => t.id === id)
    if (tasbih) {
        tasbih.count = (tasbih.count ?? 0) + 1
    }
    if (tasbih?.count === 100) {
        tasbih.count = 0
    }
}

const handleDecrement = (id: number) => {
    const tasbih = tasbihList.value.find(t => t.id === id)
    if (tasbih) {
        tasbih.count = Math.max(0, (tasbih.count ?? 0) - 1)
    }
}

const handleReset = (id: number) => {
    const tasbih = tasbihList.value.find(t => t.id === id)
    if (tasbih) {
        tasbih.count = 0
    }
}

</script>
<template>
    <div id="tasbih">
        <div id="greeting-wrapper">
            <h3>Dalam setiap tarikan nafas, aku mengingat-Mu, ya Allah.</h3>
            <img :src="imgTasbihCard" alt="tasbih card" id="card-img" />
        </div>
        <div v-for="tasbih in tasbihList" :key="tasbih.id" class="tasbih-wrapper">
            <TasbihListComponent :tasbih="tasbih" @increment="handleIncrement" @decrement="handleDecrement"
                @reset="handleReset" />
        </div>
    </div>
</template>
<style scoped>
.tasbih-wrapper {
    margin-top: 1rem;
}

#greeting-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: var(--app-green-3);
    border-radius: 16px;
    color: var(--vt-c-white);
    font-family: "Lato", sans-serif !important;
    font-weight: 400;
    font-style: normal;
}

#card-img {
    width: 160px;
    height: auto;
}
</style>