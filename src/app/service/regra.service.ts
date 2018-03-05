import { Injectable } from '@angular/core';
import { GetterService } from './getter.service';
import { Regra } from '../entity/regra';

@Injectable()
export class RegraService {

    REGRAS = "regras";

    constructor(private getter : GetterService) { }

    getRegras(): Promise<Regra[]> {
        return this.getter.get(this.REGRAS);
    }
}
