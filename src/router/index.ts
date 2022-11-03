import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { constantRoutes } from './constRoutes';
import { getToken, removeToken } from '@/utils/auth';
import { NavigationFailureType, isNavigationFailure } from 'vue-router';
import { asyncRoutes } from './asyncRoutes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
/**
 * @param { to } target route location in a normalized format being navigated to
 * @param { from } current route location in a normalized format being navigated away from
 */
let hasRoles = false;
router.beforeEach(async (to, from, next) => {
  const isAuthenticated: string | null = getToken();
  if (isAuthenticated) {
    if (to.path === '/login') {
      next({ path: '/' });
    }
    // need a next() to letgo
    if (hasRoles) {
      next();
    } else {
      hasRoles = true;
      asyncRoutes.forEach((route) => {
        router.addRoute(route);
      });
      next({ ...to, replace: true });
    }
  } else {
    // next need to be a pair
    if (to.path !== '/login') {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
    console.log('failed navigation', failure);
  }
});

export default router;
