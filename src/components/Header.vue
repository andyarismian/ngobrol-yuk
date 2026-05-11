<script setup lang="ts">
</script>

<template>
    <header>
        <div id="logo">
            <!-- https://feathericons.dev/?search=message-circle&iconset=feather -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        </div>
        <h3>Ngobrol Yuk!</h3>
    </header>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
    height: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background-color: var(--neutral-100);
    color: var(--primary-900);
    font-weight: bold;
    font-size: 1.25rem;
    position: sticky;
    top: 0;
    z-index: 999;
    border-bottom: 5px solid var(--black-500);
}

#logo{
    display: flex;
    align-items: center;
}
</style>