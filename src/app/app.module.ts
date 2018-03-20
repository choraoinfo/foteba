import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NoticiasComponent } from './component/noticias/noticias.component';
import { HomeComponent } from './component/home/home.component';
import { RegrasComponent } from './component/regras/regras.component';
import { AtletasComponent } from './component/atletas/atletas.component';
import { EstatisticasComponent } from './component/estatisticas/estatisticas.component';
import { JogoService } from './service/jogo.service';
import { NoticiaService } from './service/noticia.service';
import { RegraService } from './service/regra.service';
import { AtletaService } from './service/atleta.service';
import { EstatisticaService } from './service/estatistica.service';
import { Http, HttpModule } from '@angular/http';
import { GetterService } from './service/getter.service';
import { AutenticacaoService } from './service/autenticacao.service';
import { StorageService } from './service/storage.service';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { ImageResolverService } from './service/image-resolver.service';

@NgModule({
    declarations: [
        AppComponent, 
        LoginComponent, 
        NoticiasComponent,
        HomeComponent, 
        RegrasComponent, 
        AtletasComponent, 
        EstatisticasComponent, 
        CadastroComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        JogoService,
        NoticiaService,
        RegraService,
        AtletaService,
        EstatisticaService,
        GetterService,
        AutenticacaoService,
        StorageService,
        ImageResolverService],
    bootstrap: [AppComponent]
})
export class AppModule { }
