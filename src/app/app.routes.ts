import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.routing').then( m => m.DASHBOARD_ROUTES)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
]

