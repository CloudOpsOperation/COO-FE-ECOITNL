import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'tree',
    loadComponent: () => import('./page/tree/tree.page').then((m) => m.TreePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'aboutus',
    loadComponent: () => import('./page/aboutus/aboutus.page').then( m => m.AboutusPage)
  },
  {
    path: 'maps',
    loadComponent: () => import('./page/maps/maps.page').then( m => m.MapsPage)
  },
];
