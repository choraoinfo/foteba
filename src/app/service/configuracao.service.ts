import { Injectable } from '@angular/core';
import { GetterService } from './getter.service';
import { Configuracao } from '../entity/configuracao';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConfiguracaoService {

    SERVICE = "configuracao";

    constructor(private getter: GetterService) { }

    getConfiguracao(): Observable<Configuracao> {
        return this.getter.get(this.SERVICE);
    }
}
