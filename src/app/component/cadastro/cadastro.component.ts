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

    atleta : Atleta;
    senha: string;
    confirmar_senha : string;
    salvando: boolean;
    mensagem: string;
    
    constructor(private atletaService: AtletaService,
                private autenticacaoService: AutenticacaoService,
                private imageResolver : ImageResolverService,
                private post : PostService) { }

    ngOnInit() {
        this.savingOn();
        this.atletaService.getAtleta(this.autenticacaoService.getToken()).subscribe(
            atleta => this.sucesso(atleta),
            error => this.process(error));
        this.salvando = false;
    }

    private sucesso(atleta){
        this.atleta = atleta;
    }

    getImage(){
        if (this.atleta.avatar)
            return this.imageResolver.resolveImageAvatar(this.atleta);
    }

    doSubmit(form){
        this.mensagem = "";
        if (form.valid)
            this.savingOn();
            this.post.send("atleta/cadastro",form.value)
            .subscribe(
               success => this.process(success.message),
               error => this.process(error)
            );
    }

    private process(message){
        this.mensagem = message;
        this.savingOff();
    }

    private savingOff(){
        this.salvando = false;
    }

    private savingOn(){
        this.salvando = true;
    }
}
