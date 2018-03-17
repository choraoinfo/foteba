import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AutenticacaoService {

    constructor(private storage : StorageService) { 
    }

    login(){
        this.storage.save("user.name","kenneth");
        this.storage.save("user.id","1");
        var expiration = new Date();
        expiration.setSeconds(expiration.getSeconds() + 5);
        this.storage.save("user.timeout", expiration.getTime());
    }

    logout(){
        this.storage.delete("user.name");
        this.storage.delete("user.id");
    }

    isUsuarioLogado(){
        if (this.isSessionExpired()){
            this.logout()
            return false;
        }
        return this.getUsuarioID() != null;
    }

    getUsuarioID(){
        return this.storage.get("user.id");
    }

    private getExpirationTime(){
        return this.storage.get("user.timeout");
    }

    private isSessionExpired(){        
        return new Date().getTime() > this.getExpirationTime();
    }
}
