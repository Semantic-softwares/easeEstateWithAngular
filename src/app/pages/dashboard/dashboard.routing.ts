import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component').then((m) => m.DashboardComponent),
    children: [
      {
        path: 'notices',
        title: "EaseEsate: No 1 most reliable estate App - Notice Center",
        loadComponent: () => import('./notices/notices.component').then((m) => m.NoticesComponent),
      },
    ]
  },
]
