import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/AboutView.vue'),
    },
    {
        path: '/skills',
        name: 'skills',
        component: () => import('../components/ButterflySkills.vue'),
      },

    {
      path: '/projects',
      name: 'projects',
      component: () => import('../components/ProjectList.vue'),
    },
    {
      path: '/singleproject/:id',
      name: 'singleproject',
      component: () => import('../components/SingleCover.vue'),
    },
  ],
})

export default router