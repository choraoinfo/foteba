import { Injectable } from '@angular/core';
import { GetterService } from './getter.service';
import { Atleta } from '../entity/atleta';

@Injectable()
export class AtletaService {

    SERVICE = "atletas";
    constructor(private getter: GetterService) { }

    getAtletas(): Promise<Atleta[]> {
        return this.getter.get(this.SERVICE);
    }
}
