import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { NoticiasComponent } from './component/noticias/noticias.component';
import { HomeComponent } from './component/home/home.component';

const APP_ROUTES : Routes = [
    { path: 'noticias', component : NoticiasComponent },
    { path: '', component : HomeComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);