import { createRouter, createWebHashHistory } from 'vue-router';

const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
  },
  {
    path: '/',
    component: () => import('@/views/dashboard/index.vue'),
    hidden: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
