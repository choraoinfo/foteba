import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { NoticiasComponent } from './component/noticias/noticias.component';
import { routing } from './app.routing';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [    
    AppComponent, LoginComponent, MenuComponent, NoticiasComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
