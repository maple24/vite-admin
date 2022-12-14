import { RouteRecordRaw } from 'vue-router';
export const constantRoutes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    name: 'flexBox',
    path: '/flexbox',
    component: () => import('@/views/gallery/flexBox.vue'),
  },
  {
    name: 'layout',
    path: '/layout',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        name: 'page1',
        path: 'page1',
        component: () => import('@/views/gallery/page1.vue'),
      },
      {
        name: 'page2',
        path: 'page2',
        component: () => import('@/views/gallery/page2.vue'),
      },
      {
        name: 'page3',
        path: 'page3',
        component: () => import('@/views/gallery/page3.vue'),
      },
      {
        name: 'page4',
        path: 'page4',
        component: () => import('@/views/gallery/page4.vue'),
      },
      {
        name: 'draft',
        path: 'draft',
        component: () => import('@/views/gallery/draft.vue'),
      },
    ],
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
    name: '404',
    path: '/404',
    component: () => import('@/views/errorpage/404.vue'),
  },
];
