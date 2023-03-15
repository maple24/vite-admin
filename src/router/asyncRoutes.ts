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
    path: '/agent',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/agent/index',
    meta: {
      roles: ['visitor'],
      title: 'agent',
    },
    children: [
      {
        path: 'index',
        name: 'agent',
        component: () => import('@/views/agent/index.vue'),
      },
    ],
  },
  {
    path: '/device',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/device/index',
    meta: {
      roles: ['visitor'],
      title: 'device',
    },
    children: [
      {
        path: 'index',
        name: 'device',
        component: () => import('@/views/device/index.vue'),
      },
    ],
  },
  {
    path: '/task',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/task/index',
    meta: {
      roles: ['visitor'],
      title: 'task',
    },
    children: [
      {
        path: 'index',
        name: 'task',
        component: () => import('@/views/task/index.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: '/404',
  },
];
