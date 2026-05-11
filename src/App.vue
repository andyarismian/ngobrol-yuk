<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue';
import imgBackground from '@/assets/img/bg.png';
</script>

<template>
  <Header />
  <!-- <HelloWorld msg="You did it!" /> -->
  <RouterView />
  <Menu />
</template>

<style scoped>
</style>
