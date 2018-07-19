import { Injectable } from '@angular/core';
import { Jogo } from '../entity/jogo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { GetterService } from './getter.service';
import { Observable } from 'rxjs/Observable';

@Injectable() 
export class JogoService {

    SERVICE = "jogos/proximos";

    constructor(private getter: GetterService) { }

    getProximosJogos(): Observable<Jogo[]> {
        return this.getter.get(this.SERVICE);
    }
}
