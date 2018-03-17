import { Injectable } from '@angular/core';
import { GetterService } from './getter.service';
import { Regra } from '../entity/regra';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegraService {

    REGRAS = "regras";

    constructor(private getter : GetterService) { }

    getRegras(): Observable<Regra[]> {
        return this.getter.get(this.REGRAS);
    }
}
