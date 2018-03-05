import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Jogo } from '../entity/jogo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { GetterService } from './getter.service';

@Injectable()
export class JogoService {
    
    SERVICE = "jogos/proximos";
	constructor(private getter : GetterService) { }

    getProximosJogos() : Promise<Jogo[]> {
        return this.getter.get(this.SERVICE);
    }
}
