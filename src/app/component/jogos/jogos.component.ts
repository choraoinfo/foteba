import { Component, OnInit } from '@angular/core';
import { Jogo } from '../../entity/jogo';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { ImageResolverService } from '../../service/image-resolver.service';
import { JogoService } from '../../service/jogo.service';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { ConfiguracaoService } from '../../service/configuracao.service';
import { Configuracao } from '../../entity/configuracao';
import { AtletaService } from '../../service/atleta.service';
import { Atleta } from '../../entity/atleta';

@Component({
    selector: 'app-jogos',
    templateUrl: './jogos.component.html',
    styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

    jogos: Jogo[];
    private promiseJogos: Observable<Jogo[]>;
    private configuracao: Configuracao;
    private atleta : Atleta;

    constructor(private jogosService: JogoService,
        private imagemResolver: ImageResolverService,
        private autenticacaoService: AutenticacaoService,
        private configuracaoService: ConfiguracaoService,
        private atletaService : AtletaService) { }

    ngOnInit(): void {
        this.configuracaoService.getConfiguracao().subscribe(
            config => this.configuracao = config,
            error => console.log(error)
        )
        this.atletaService.getAtleta(this.autenticacaoService.getToken()).subscribe(
            atleta => this.atleta = atleta,
            error => console.log(error)
        );

        this.jogosService.getProximosJogos().subscribe(
            jogos => this.jogos = jogos,
            error => console.log(error)
        );
    }

    podeConfirmar(jogo) {
        return this.autenticacaoService.isLogged() &&
            jogo.confirmados.length < this.configuracao.max_jogadores &&
            !this.estaConfirmado(jogo);
    }

    estaConfirmado(jogo){
        for (let cont = 0; cont < jogo.confirmados.length; cont++)
            if (jogo.confirmados[cont].atleta.id == this.atleta.id && jogo.confirmados[cont].ativo == 1)
                return true;
        return false;
    }

    getImagem(atleta) {
        return this.imagemResolver.resolveThumbnailAvatar(atleta);
    }

    podeRenderizar() {
        return this.autenticacaoService.isLogged() && this.jogos && this.configuracao && this.atleta;
    }

    status(jogo){
        if (jogo.status != 1 && jogo.confirmados.length < this.configuracao.min_jogadores)
            return 2;
        return jogo.status;        
    }
}
