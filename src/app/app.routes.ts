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
    path: 'tree-maps',
    loadComponent: () => import('./page/maps/maps.page').then( m => m.MapsPage)
  },
  {
    path: 'catalog-tree',
    loadComponent: () => import('./page/catalog-tree/catalog-tree.page').then( m => m.CatalogTreePage)
  },
  {
    path: 'catalog-location',
    loadComponent: () => import('./page/catalog-location/catalog-location.page').then( m => m.CatalogLocationPage)
  },
  {
    path: 'scan-code',
    loadComponent: () => import('./page/scan-code/scan-code.page').then( m => m.ScanCodePage)
  }
];
