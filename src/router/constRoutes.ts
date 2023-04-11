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
    meta: {
      title: 'dashboard',
    },
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
    redirect: '/RQM/index',
    children: [
      {
        path: 'index',
        // name can not use twice
        name: 'RQM',
        component: () => import('@/views/RQM/index.vue'),
        meta: {
          title: 'RQM',
        },
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/RQM/search.vue'),
        meta: {
          title: 'RQM-Search',
        },
      },
      {
        path: 'upload',
        name: 'upload',
        component: () => import('@/views/RQM/upload.vue'),
        meta: {
          title: 'RQM-create',
        },
      },
    ],
  },
  {
    path: '/chat',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/chat/index',
    meta: {
      title: 'chat',
    },
    children: [
      {
        path: 'index',
        name: 'chat',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
  {
    path: '/graph',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/graph/index',
    meta: {
      title: 'graph',
    },
    children: [
      {
        path: 'index',
        name: 'graph',
        component: () => import('@/views/graph/index.vue'),
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/errorpage/404.vue'),
  },
];
