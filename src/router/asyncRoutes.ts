import { RouteRecordRaw } from 'vue-router';
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/profile',
    name: 'userProfile',
    component: () => import('@/views/profile/index.vue'),
    meta: {
      roles: ['admin'],
      title: 'profile',
    },
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: () => import('@/components/HelloWorld.vue'),
    meta: {
      roles: ['admin', 'visitor'],
    },
  },
  {
    // path: '/:pathMatch(.*)*',
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: '/404',
  },
];
