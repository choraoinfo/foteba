import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { HttpModule } from '@angular/http';
import { GetterService } from './service/getter.service';
import { AutenticacaoService } from './service/autenticacao.service';
import { StorageService } from './service/storage.service';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { ImageResolverService } from './service/image-resolver.service';
import { PostService } from './service/post.service';
import { LogadoComponent } from './logado/logado/logado.component';
import { RouterModule } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato/extrato.component';
import { LoadingComponent } from './loading/loading/loading.component';
import { MensagemComponent } from './mensagem/mensagem/mensagem.component';
import { ExtratoService } from './service/extrato.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NoticiasComponent,
        HomeComponent,
        RegrasComponent,
        AtletasComponent,
        EstatisticasComponent,
        CadastroComponent,
        LogadoComponent,
        ExtratoComponent,
        LoadingComponent,
        MensagemComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path : '', component : HomeComponent },
            { path : 'foteba3', component : HomeComponent },
            { path : 'noticias', component : NoticiasComponent },
            { path : 'regras', component : RegrasComponent },
            { path : 'cadastro', component : CadastroComponent },
            { path : 'atletas', component : AtletasComponent },
            { path : 'estatisticas', component : EstatisticasComponent },
            { path : 'extrato', component : ExtratoComponent },
        ])
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
        ImageResolverService,
        PostService,
        ExtratoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
