import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GetterService } from './getter.service';
import { Extrato } from '../entity/extrato';

@Injectable()
export class ExtratoService {

    private EXTRATO_SERVICE = 'atleta/extrato/';

    constructor(private getter: GetterService) { }

    getExtrato(token: string): Observable<Extrato> {
        return this.getter.get(this.EXTRATO_SERVICE + token);
    }
}
