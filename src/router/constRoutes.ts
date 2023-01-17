import { RouteRecordRaw } from 'vue-router';
import { extraRoutes } from './extraRoutes';

export const constantRoutes: RouteRecordRaw[] = [
  // add extraRoutes into constantRoutes
  ...extraRoutes,

  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
  {
    path: '/RQM',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/RQM/search',
    children: [
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/RQM/search.vue'),
      },
      {
        path: 'upload',
        name: 'upload',
        component: () => import('@/views/RQM/upload.vue'),
      },
    ],
  },
  {
    path: '/chat',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/chat/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/errorpage/404.vue'),
  },
];
