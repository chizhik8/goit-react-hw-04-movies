import { lazy } from 'react';

export const maineroutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('./pages/HomePage')),
    isVisible: true,
  },
  {
    path: '/pages/:movieId',
    name: 'MoviesDetails',
    exact: false,
    component: lazy(() => import('./pages/MovieDetailsPage')),
    isVisible: false,
  },
  {
    path: '/pages',
    name: 'Movies',
    exact: false,
    component: lazy(() => import('./pages/MoviesPage')),
    isVisible: true,
  },
];
