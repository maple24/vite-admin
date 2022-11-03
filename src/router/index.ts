import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoutes } from './constRoutes';
import { getToken } from '@/utils/auth';
import { NavigationFailureType, isNavigationFailure } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

/**
 * @param { to } target route location in a normalized format being navigated to
 * @param { from } current route location in a normalized format being navigated away from
 */
router.beforeEach(async (to, from) => {
  const isAuthenticated: string | null = getToken();

  if (!isAuthenticated && to.path !== '/login') {
    return '/login';
  }
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
    console.log('failed navigation', failure);
  }
});

export default router;
