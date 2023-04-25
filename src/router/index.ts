import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoutes } from './constRoutes';
import { getToken, removeToken } from '@/utils/auth';
import { NavigationFailureType, isNavigationFailure } from 'vue-router';
import { asyncRoutes } from './asyncRoutes';
import { generateRoutes } from '@/utils/route';
import { useUserStore } from '@/store/user';

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

router.beforeEach(async (to, from, next) => {
  const store = useUserStore(); // pinia cannot be used outside a component, so store can not be initialized outside
  const isAuthenticated: string | undefined = getToken();
  if (isAuthenticated) {
    if (to.path === '/login') {
      next({ path: '/' });
    }

    const hasRoles = store.roles.length > 0;
    // need a next() to letgo, if hasrole, dynamical route has registered
    if (hasRoles) {
      next();
    } else {
      await store.getUserInfo();
      const accessedRoutes = generateRoutes(store.roles, asyncRoutes);
      accessedRoutes.forEach((route) => {
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
