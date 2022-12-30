import { RouteRecordRaw } from 'vue-router';
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile/index.vue'),
    meta: {
      roles: ['admin'],
      title: 'profile',
    },
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
    path: '/helloworld',
    name: 'helloworld',
    component: () => import('@/components/HelloWorld.vue'),
    meta: {
      roles: ['admin', 'visitor'],
    },
    children: [
      {
        path: 'draft',
        name: 'test',
        component: () => import('@/views/gallery/draft.vue'),
        meta: {
          roles: ['visitor'],
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: '/404',
  },
];
