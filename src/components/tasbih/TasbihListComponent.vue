<script lang="ts" setup>
import { onMounted } from 'vue'

const props = defineProps<{
    tasbih: {
        id: number;
        name: string;
        arabic: string;
        latin: string;
        translation: string;
        count?: number;
    }
}>()

const emit = defineEmits<{
    increment: [id: number]
    decrement: [id: number]
    reset: [id: number]
}>()

onMounted(() => {
    $(`#upCount${props.tasbih.id}`).click(() => {
        console.log(`up count + ${props.tasbih.count} + ${props.tasbih.name}`)
        emit('increment', props.tasbih.id)
    })
    $(`#downCount${props.tasbih.id}`).click(() => {
        console.log(`down count + ${props.tasbih.count} + ${props.tasbih.name}`)
        emit('decrement', props.tasbih.id)
    })
})
</script>

<template>
    <div class="listDzikir">
        <button class="reset" @click="emit('reset', props.tasbih.id)">
            <!-- https://feathericons.dev/?search=refresh-cw&iconset=feather -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2">
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
        </button>
        <div class="dzikir-item">
            <div class="dzikir">
                <p style="font-size: 1.2em; font-weight: bold; text-align: right;">{{ props.tasbih.arabic }}</p>
                <p>{{ props.tasbih.latin }}</p>
                <p style="font-size: 0.8em; font-weight: lighter; font-style: italic;">"{{ props.tasbih.translation }}"
                </p>
            </div>
        </div>
        <div>
            <div class="showCount">
                {{ props.tasbih.count || 0 }}
            </div>
            <button :id="'downCount' + props.tasbih.id" class="downCount" ref="downCountRef">
                <!-- https://feathericons.dev/?search=plus&iconset=feather -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2">
                    <!-- https://feathericons.dev/?search=minus&iconset=feather -->
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
        </div>
        <button :id="'upCount' + props.tasbih.id" class="upCount" ref="upCountRef">
            <!-- https://feathericons.dev/?search=plus&iconset=feather -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2">
                <polyline points="18 15 12 9 6 15" />
            </svg>
        </button>
    </div>
</template>

<style scoped>
.listDzikir {
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}

.reset {
    border-radius: 8px;
    min-width: 60px;
    align-self: stretch;
    background-color: var(--app-yellow-1);
    color: var(--vt-c-white-soft);
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dzikir-item {
    background-color: var(--vt-c-white-soft);
    border-radius: 8px;
    padding: 10px;
    width: 100%;
}

.upCount {
    background-color: transparent;
    border: none;
    cursor: pointer;
    background-color: var(--app-blue-2);
    color: var(--vt-c-white-soft);
    border-radius: 50%;
    width: 60px !important;
    height: 60px !important;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.downCount {
    background-color: transparent;
    border: none;
    cursor: pointer;
    background-color: var(--app-blue-2);
    color: var(--vt-c-white-soft);
    border-radius: 50%;
    width: 40px !important;
    height: 40px !important;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.showCount {
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    background-color: var(--app-green-3);
    color: var(--vt-c-white);
    border-radius: 100%;
    width: 40px !important;
    height: 40px !important;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
}
</style>