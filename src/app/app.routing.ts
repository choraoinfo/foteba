import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { NoticiasComponent } from './component/noticias/noticias.component';
import { HomeComponent } from './component/home/home.component';
import { AtletasComponent } from './component/atletas/atletas.component';
import { RegrasComponent } from './component/regras/regras.component';
import { EstatisticasComponent } from './component/estatisticas/estatisticas.component';
import { ExtratoComponent } from './component/extrato/extrato.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';

const APP_ROUTES : Routes = [
    { path: 'noticias', component : NoticiasComponent },
    { path: 'regras', component : RegrasComponent },
    { path: 'atletas', component : AtletasComponent },
    { path: 'estatisticas', component : EstatisticasComponent },
    { path: 'extrato', component : ExtratoComponent },
    { path: 'cadastro', component : CadastroComponent },
    { path: '', component : HomeComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);