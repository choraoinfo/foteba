import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GetterService } from './getter.service';
import { Lancamento } from '../entity/lancamento';

@Injectable()
export class ExtratoService {

    private EXTRATO_SERVICE = "atleta/extrato/";

    constructor(private getter: GetterService) { };

    getLancamentos(token: string): Observable<Lancamento[]> {
        return this.getter.get(this.EXTRATO_SERVICE + token);
    }

}
