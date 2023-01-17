import { RouteRecordRaw } from 'vue-router';
/**
 * extraRoutes
 * the routes that are used for practice
 */
export const extraRoutes: RouteRecordRaw[] = [
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
        name: 'js30',
        path: '/js30',
        component: () => import('@/views/js30/index.vue'),
        children: [
            {
                name: 'day1',
                path: 'day1',
                component: () => import('@/views/js30/day1.vue')
            }
        ]
    }
]