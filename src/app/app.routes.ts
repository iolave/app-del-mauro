import { Routes } from '@angular/router';

export const routes: Routes = [
  {
   path: '',
   loadChildren: () => import('./paginas/paginas-routing.module').then(m => m.PaginasRoutingModule),
  },
  {
    path: '',
    redirectTo: 'iniciosesion',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
