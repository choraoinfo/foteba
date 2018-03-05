import { Injectable } from '@angular/core';

@Injectable()
export class AutenticacaoServiceService {

    isLogado : boolean;

    constructor() { 
        console.log('instanciando autenticacao');
    }

    login(){
        this.isLogado = true;
    }

    logout(){
        this.isLogado = false;
    }

    isUsuarioLogado(){
        return this.isLogado;
    }
}
