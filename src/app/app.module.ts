import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { NoticiasComponent } from './component/noticias/noticias.component';
import { routing } from './app.routing';
import { HomeComponent } from './component/home/home.component';
import { RegrasComponent } from './component/regras/regras.component';
import { AtletasComponent } from './component/atletas/atletas.component';
import { EstatisticasComponent } from './component/estatisticas/estatisticas.component';
import { JogoService } from './service/jogo.service';
import { NoticiaService } from './service/noticia.service';
import { RegraService } from './service/regra.service';
import { AtletaService } from './service/atleta.service';
import { EstatisticaService } from './service/estatistica.service';
import { LogadoComponent } from './component/logado/logado.component';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [    
    AppComponent, LoginComponent, MenuComponent, NoticiasComponent, HomeComponent, RegrasComponent, AtletasComponent, EstatisticasComponent, LogadoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [JogoService,NoticiaService,RegraService,AtletaService,EstatisticaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
