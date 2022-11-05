import { RouteRecordRaw } from 'vue-router';
export const constantRoutes: RouteRecordRaw[] = [
  {
    name: 'loginPage',
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
    ],
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
