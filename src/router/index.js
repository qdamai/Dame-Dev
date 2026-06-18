import { createRouter, createWebHistory } from 'vue-router'
import WebProjectsView from '../views/WebProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'web-projects',
      component: WebProjectsView,
    },
    {
      path: '/design',
      name: 'design-gallery',
      component: () => import('../views/DesignGalleryView.vue'),
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
