import { Component, OnInit } from '@angular/core';
import { Atleta } from '../../entity/atleta';
import { AtletaService } from '../../service/atleta.service';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { ImageResolverService } from '../../service/image-resolver.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    atleta : Atleta;
    promiseAtleta : Promise<Atleta>;

    constructor(private atletaService: AtletaService,
                private autenticacaoService: AutenticacaoService,
                private imageResolver : ImageResolverService) { }

    ngOnInit() {
        this.atleta = new Atleta;
        this.promiseAtleta = this.atletaService.getAtleta(this.autenticacaoService.getUsuarioID());
        this.promiseAtleta.then(
            atleta => this.atleta = atleta,
            error => console.log(error));
    }

    getImage(){
        if (this.atleta.avatar)
            return this.imageResolver.resolveThumbnailAvatar(this.atleta);
    }

    doSubmit(form){
        console.log(form);
    }
}
