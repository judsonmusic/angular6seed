import { routing, appRoutingProviders } from './routing/app.routing';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlertModule, CollapseModule } from 'ngx-bootstrap';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    AlertModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
