<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import Question from '@/components/QuestionComponent.vue'
import { storage } from '@/utils/storage'
import { random } from '@/utils/random'

type Pertanyaan = {
    id: number
    pertanyaan: string
}

const route = useRoute()
const id = String(route.params.id)

const title = ref('')
const alreadyTaken = ref<number[]>([])
const listPertanyaan = ref<Pertanyaan[]>([])
const pertanyaan = ref<Pertanyaan | null>(null)

onMounted(async () => {
    const data = await import(`@/assets/data/${id}.json`)

    title.value = data.text
    listPertanyaan.value = data.data

    alreadyTaken.value = storage.get(id) || []

    if (listPertanyaan.value.length === 0) return
    const randomIndex = random.int(0, listPertanyaan.value.length - 1)
    const first = listPertanyaan.value[randomIndex]!

    pertanyaan.value = first
    alreadyTaken.value.push(first.id)

    storage.set(id, alreadyTaken.value)
})

const getRandom = () => {
    if (!listPertanyaan.value.length) return

    const available = listPertanyaan.value.filter(
        item => !alreadyTaken.value.includes(item.id)
    )

    // kalau habis, reset
    if (available.length === 0) {
        alreadyTaken.value = []
        storage.set(id, [])
        return getRandom()
    }

    const selected = random.pick(available)

    pertanyaan.value = selected
    alreadyTaken.value.push(selected.id)

    storage.set(id, alreadyTaken.value)
}
</script>
<template>
    <div id="main">
        <div id="top">
            <RouterLink to="/ngobrol" class="btn btn-secondary border-pixel-sm">
                <!-- https://feathericons.dev/?search=arrow-left&iconset=feather -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2">
                    <line x1="19" x2="5" y1="12" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
            </RouterLink>
            <div class="card border-pixel bg-neutral-100" style="width: 100%;">
                <div class="card-body">
                    {{ title }}
                </div>
            </div>
        </div>
        <div class="content">
            <Question :question="pertanyaan?.pertanyaan || ''" />
            <button class="btn btn-primary btn-full mt-4" @click="getRandom">
                Pertanyaan lain
                <!-- https://feathericons.dev/?search=chevrons-right&iconset=feather -->
                <svg :class="['animation-move']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                    height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2">
                    <polyline points="13 17 18 12 13 7" />
                    <polyline points="6 17 11 12 6 7" />
                </svg>

            </button>
        </div>
    </div>
</template>
<style scoped>
#main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;
}

#top {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}

.card-body {
    font-size: 1rem;
    font-weight: bold;
}

#question {
    margin-top: 2rem;
}

.animation-move {
    animation: move 1s ease-in-out infinite;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    max-width: 100%;
}

@keyframes move {

    0%,
    100% {
        margin-left: 0;
    }

    50% {
        margin-left: 2rem;
    }
}
</style>