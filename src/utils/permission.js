function hasPermission(roles, route) {

  if (route.meta && route.meta.roles) {

    return roles.some((role) => route.meta.roles.includes(role)); // if one of roles included in route meta, then return true
  } else {

    return true;
  }
}

export function filterAsyncRoutes(routes, roles) {
  const res = [];

  routes.forEach((route) => {
    // const tmp = { ...route }

    if (hasPermission(roles, route)) {
      if (route.children) {
        route.children = filterAsyncRoutes(route.children, roles);
      }
      res.push(route);
    }
  });
  return res;
}

export function generateRoutes(roles) {

  let accessedRoutes;
  if (roles.includes('admin')) {
    accessedRoutes = asyncRoutes || []
  } else {
    accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
  }

}