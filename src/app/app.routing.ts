import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [ 
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'detail', component: DetailComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);