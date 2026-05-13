<script setup lang="ts">
defineProps<{
    question: string
}>()
</script>
<template>
    <div>
        <div class="card bg-neutral-100 border-pixel">
            <div class="card-body">
                {{ question }}
            </div>
        </div>
    </div>
</template>
<style scoped>
.card-body {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
}
</style>