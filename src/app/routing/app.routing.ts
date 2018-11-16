import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { authProviders }      from './login.routing';
import { ModuleWithProviders } from '@angular/compiler/src/core';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about',      component: AboutComponent },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];


export const appRoutingProviders: any[] = [
  authProviders
];
//export const routing = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
