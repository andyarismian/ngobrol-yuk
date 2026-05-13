import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ngobrol',
      name: 'ngobrol',
      component: () => import('../views/NgobrolView.vue'),
    },
    {
      path: '/harmony',
      name: 'harmony',
      component: () => import('../views/HarmonyView.vue'),
    },
    {
      path: '/ngobrol/:id',
      name: 'ngobrol-detail',
      component: () => import('../views/NgobrolDetailView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // kalau user pakai back/forward
    if (savedPosition) {
      return savedPosition
    }

    // kalau ada anchor (#id)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // default: ke atas
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
