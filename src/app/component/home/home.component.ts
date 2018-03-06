import { Component, OnInit } from '@angular/core';
import { JogoService } from '../../service/jogo.service';
import { Jogo } from '../../entity/jogo';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { ImageResolverService } from '../../service/image-resolver.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    promiseJogos : Promise<Jogo[]>;
    jogos : Jogo[];    

    constructor(private jogosService : JogoService, 
                private autenticacaoService : AutenticacaoService,
                private imagemResolver : ImageResolverService) {}

	ngOnInit(): void {
        this.promiseJogos = this.jogosService.getProximosJogos();
        this.promiseJogos.then(
            jogos => this.jogos = jogos,
            error =>  console.log(error));
    }
    
    isUsuarioLogado(){
        return this.autenticacaoService.isUsuarioLogado();
    }

    getImagem(atleta){
        return this.imagemResolver.resolveThumbnailAvatar(atleta);
    }
}
