import { Component, OnInit } from '@angular/core';
import { Atleta } from '../../entity/atleta';
import { AtletaService } from '../../service/atleta.service';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { ImageResolverService } from '../../service/image-resolver.service';
import { PostService } from '../../service/post.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    atleta: Atleta;
    senha: string;
    confirmar_senha: string;
    mensagemErro: string;
    mensagemSucesso: string;

    constructor(private atletaService: AtletaService,
        private autenticacaoService: AutenticacaoService,
        private imageResolver: ImageResolverService,
        private post: PostService) { }

    ngOnInit() {
        this.atletaService.getAtleta(this.autenticacaoService.getToken()).subscribe(
            atleta => this.sucesso(atleta),
            error => this.mensagemErro = error.message);
    }

    private sucesso(atleta) {
        this.atleta = atleta;
    }

    getImage() {
        if (this.atleta.avatar)
            return this.imageResolver.resolveImageAvatar(this.atleta);
    }

    doSubmit(form) {
        this.mensagemErro = "";
        this.mensagemSucesso = "";
        if (form.valid)
            this.post.send("atleta/cadastro", form.value)
                .subscribe(
                    success => this.mensagemSucesso = success.message,
                    error => this.mensagemErro = error.mensagem
                );
    }

    isLogado() {
        return this.autenticacaoService.isLogged();
    }

}
