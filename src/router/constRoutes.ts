import { RouteRecordRaw } from 'vue-router';
export const constantRoutes: RouteRecordRaw[] = [
  {
    name: 'loginPage',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    name: 'dashBoard',
    path: '/',
    component: () => import('@/views/dashBoard/index.vue'),
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/errorPage/404.vue'),
  },
];
