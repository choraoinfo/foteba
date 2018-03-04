import { Injectable } from '@angular/core';

@Injectable()
export class AtletaService {

    constructor() { }

    getAtletas() {
        return [{ 'nome' : 'Kenneth', 'apelido' : 'Chorão'}];
    }

}
