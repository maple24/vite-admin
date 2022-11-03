/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    name: 'userProfile',
    path: '/profile',
    component: '',
    meta: {
      role: 'admin',
      title: 'profile',
    },
  },
  {
    path: '*',
    redirect: '/404',
  },
];
