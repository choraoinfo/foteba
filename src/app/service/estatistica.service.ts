import { Injectable } from '@angular/core';

@Injectable()
export class EstatisticaService {

    constructor() { }

    getEstatisticas() {
        return [{ 'titulo' : 'jogos-sucesso', 'quantidade' : 15 }];
    }

}
