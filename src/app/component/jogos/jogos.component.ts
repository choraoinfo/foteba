import { Component, OnInit } from '@angular/core';
import { Jogo } from '../../entity/jogo';
import { ImageResolverService } from '../../service/image-resolver.service';
import { JogoService } from '../../service/jogo.service';
import { ConfiguracaoService } from '../../service/configuracao.service';
import { Configuracao } from '../../entity/configuracao';

@Component({
    selector: 'app-jogos',
    templateUrl: './jogos.component.html',
    styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

    jogos: Jogo[];
    private configuracao: Configuracao;

    constructor(private jogosService: JogoService,
        private imagemResolver: ImageResolverService,
        private configuracaoService: ConfiguracaoService) { }

    ngOnInit(): void {
        this.configuracaoService.getConfiguracao().subscribe(
            config => this.configuracao = config,
            error => console.log(error)
        );
        this.listaJogos();
    }

    private listaJogos() {
        this.jogosService.getProximosJogos().subscribe(
            jogos => this.jogos = jogos,
            error => console.log(error)
        );
    }

    valorDoJogo(jogo) {
        const valorQuadra = this.configuracao.valor_jogo;
        const confirmaosNaoGoleiros = jogo.confirmados.filter(confirma => confirma.atleta.goleiro_fixo == 0).length;
        const qtdeConfirmados = confirmaosNaoGoleiros + jogo.convidados.length;
        return qtdeConfirmados === 0 ? 0 : Math.ceil(valorQuadra / qtdeConfirmados);
    }

    getAvatar(atleta, jogo) {
        if (atleta.saldo >= this.valorDoJogo(jogo)) {
            return this.getImagem(atleta);
        }
        return './assets/img/selo.png';
    }

    getImagem(atleta) {
        return this.imagemResolver.resolveThumbnailAvatar(atleta);
    }

    podeRenderizar() {
        return this.jogos && this.configuracao;
    }

    status(jogo) {
        if (jogo.status !== 1 && jogo.confirmados.length < this.configuracao.min_jogadores) {
            return 2;
        }
        return jogo.status;
    }
}
