import { Component, OnInit } from '@angular/core';
import { Jogo } from '../../entity/jogo';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { ImageResolverService } from '../../service/image-resolver.service';
import { JogoService } from '../../service/jogo.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

    promiseJogos : Observable<Jogo[]>;
    jogos : Jogo[];    

    constructor(private jogosService : JogoService, 
                private imagemResolver : ImageResolverService) {}

	ngOnInit(): void {
        this.jogosService.getProximosJogos().subscribe(
            jogos => this.jogos = jogos,
            error =>  console.log(error)
        );
    }
    
    getImagem(atleta){
        return this.imagemResolver.resolveThumbnailAvatar(atleta);
    }

}
