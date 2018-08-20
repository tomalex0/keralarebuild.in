import { Routes } from '@angular/router';


const appRoutes :Routes = [{
  path: '',
  loadChildren: './home/home.module#HomeModule'
},{
  path: 'about',
  loadChildren: './about/about.module#AboutModule'
}];

export const routing = appRoutes;
