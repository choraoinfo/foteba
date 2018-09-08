import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { PostService } from '../../service/post.service';
import { Configuracao } from '../../entity/configuracao';
import { ConfiguracaoService } from '../../service/configuracao.service';

@Component({
    selector: 'app-confirmacao',
    templateUrl: './confirmacao.component.html',
    styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

    @Input()
    jogo: any;

    @Output()
    confirmacaoEvent = new EventEmitter();

    private CONFIRMATION_SERVICE = 'jogo/confirmacao';

    private configuracao: Configuracao;

    constructor(private autenticacaoService: AutenticacaoService,
        private postService: PostService,
        private configuracaoService: ConfiguracaoService) { }

    ngOnInit() {
        this.configuracaoService.getConfiguracao().subscribe(
            config => this.configuracao = config,
            error => console.log(error)
        );
    }

    podeConfirmar() {
        const atletaLogado = this.autenticacaoService.getLoggedUser();
        if (atletaLogado == null) {
            return false;
        }
        return this.configuracao && this.configuracao.max_jogadores > this.jogo.confirmados.length && !this.estaConfirmado(atletaLogado);
    }

    private estaConfirmado(atletaLogado) {
        const estaConfirmado = this.jogo.confirmados.filter(confirmado => confirmado.atleta.id === atletaLogado.id);
        return estaConfirmado.length === 1;
    }

    confirmar(jogo) {
        const json: any = {};
        json.jogo = jogo.id;
        json.atleta = this.autenticacaoService.getToken();
        this.postService.send(this.CONFIRMATION_SERVICE, json).subscribe(
            () => this.sucesso(), error => this.erro(error)
        );
    }

    private sucesso() {
        this.confirmacaoEvent.emit('');
    }

    private erro(error) {
        console.log(error);
    }

    podeDesconfirmar() {
        const atletaLogado = this.autenticacaoService.getLoggedUser();
        if (atletaLogado == null) {
            return false;
        }
        return this.autenticacaoService.isLogged() && this.estaConfirmado(atletaLogado);
    }
}
