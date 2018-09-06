import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Estatistica } from '../entity/estatistica';
import { GetterService } from './getter.service';

@Injectable()
export class EstatisticaService {

    private STAT_SERVICE = 'estatisticas';

    constructor(private getter: GetterService) { }

    getEstatisticas(): Observable<Estatistica> {
        return this.getter.get(this.STAT_SERVICE);
    }
}
