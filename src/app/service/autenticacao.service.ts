import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PostService } from './post.service';

@Injectable()
export class AutenticacaoService {

    TOKEN_STRING = "user.token";
    SERVICE_URL = "atleta/login";

    constructor(private storage : StorageService,
                private post : PostService) { 
    }

    login(user, pass){
        var json = JSON.stringify({ 'user': user, 'pass': pass });
        var observable = this.post.send(this.SERVICE_URL, json);
        observable.subscribe(
            success => this.saveToken(success.message),
            error => this.clear()
        );
        return observable;
    }

    private saveToken(token){
        this.storage.save(this.TOKEN_STRING, token);
    }

    private clear(){
        this.logout();
    }

    logout(){
        this.storage.delete(this.TOKEN_STRING);
    }

    isLogged(){        
        return this.getToken() != null;
    }

    getToken(){        
        return this.storage.get(this.TOKEN_STRING);
    }
}
