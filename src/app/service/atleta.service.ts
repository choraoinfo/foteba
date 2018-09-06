import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GetterService } from './getter.service';
import { Atleta } from '../entity/atleta';

@Injectable()
export class AtletaService {

    ALL_SERVICE = '"atletas';
    UNIQUE_SERVICE = 'atleta/';

    constructor(private getter: GetterService) { }

    getAtletas(): Observable<Atleta[]> {
        return this.getter.get(this.ALL_SERVICE);
    }

    getAtleta(id): Observable<Atleta> {
        return this.getter.get(this.UNIQUE_SERVICE + id);
    }
}
