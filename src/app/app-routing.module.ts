import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./routes/home/home.module').then(module => module.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('./routes/home/home.module').then(module => module.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'customers',
    loadChildren: () => import('./routes/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./routes/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: ':profileId',
    loadChildren: () => import('./routes/profile/profile.module').then(m => m.ProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
