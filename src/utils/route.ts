import { RouteRecordRaw } from 'vue-router';
import { role } from '@/types/user';

//
function hasPermission(roles: role[], route: RouteRecordRaw) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta?.roles?.includes(role)); // optional chaining
  } else {
    return true; // else the page do not need permission
  }
}

function filterAsyncRoutes(routes: RouteRecordRaw[], roles: role[]) {
  const res: RouteRecordRaw[] = [];

  routes.forEach((route) => {
    if (hasPermission(roles, route)) {
      if (route.children) {
        route.children = filterAsyncRoutes(route.children, roles);
      }
      res.push(route);
    }
  });
  return res;
}

export function generateRoutes(roles: role[], routes: RouteRecordRaw[]) {
  let accessedRoutes: RouteRecordRaw[] | [];
  if (roles.includes('admin')) {
    accessedRoutes = routes || [];
  } else {
    accessedRoutes = filterAsyncRoutes(routes, roles);
  }
  return accessedRoutes;
}
