import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AutenticacaoService {

    constructor(private storage : StorageService) { 
    }

    login(){
        this.storage.save("user.name","kenneth");
        this.storage.save("user.id","1");
    }

    logout(){
        this.storage.delete("user.name");
        this.storage.delete("user.id");
    }

    isUsuarioLogado(){
        return this.getUsuarioID() != null;
    }

    getUsuarioID(){
        return this.storage.get("user.id");
    }
}
