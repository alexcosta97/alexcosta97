import { lazy } from 'react';

export enum RoutePaths {
  // Error Routes
  NotFound = '/not-found',

  // Public Routes
  Home = '/'
}

export const routes = [
  {
    name: 'Home',
    path: RoutePaths.Home,
    element: lazy(() => import('~/views/home')),
    isIndex: true
  }
];

interface Route {
  path: RoutePaths;
  to: RoutePaths;
}

export const redirectRoutes: Route[] = [];
