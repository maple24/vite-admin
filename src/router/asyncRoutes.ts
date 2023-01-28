import { RouteRecordRaw } from 'vue-router';
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/profile/index',
    meta: {
      roles: ['visitor'],
      title: 'profile',
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index.vue')
      }
    ]
  },
  {
    path: '/permission',
    name: 'permission',
    redirect: '/permission/index',
    component: () => import('@/views/layout/index.vue'),
    meta: {
      roles: ['admin'],
      title: 'permission',
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/permission/index.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: '/404',
  },
];
