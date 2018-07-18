import { Injectable } from '@angular/core';
import { GetterService } from './getter.service';
import { AutenticacaoService } from './autenticacao.service';
import { Lancamento } from '../entity/lancamento';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class ExtratoService {

    private EXTRATO_SERVICE = "atleta/extrato/";

    constructor(private getter: GetterService) { };

    getLancamentos(token: string): Observable<Lancamento[]> {        
        return this.getter.get(this.EXTRATO_SERVICE + token);
    }

}
