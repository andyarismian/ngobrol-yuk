import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tasbih from '../views/TasbihView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasbih',
      component: Tasbih,
    },
    {
      path: '/sholawat',
      name: 'sholawat',
      component: () => import('../views/SholawatView.vue'),
    },
    {
      path: '/dzikir',
      name: 'dzikir',
      component: () => import('../views/DzikirView.vue'),
    },
  ],
})

export default router
