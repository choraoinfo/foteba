import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PostService } from './post.service';

@Injectable()
export class AutenticacaoService {

    TOKEN_STRING = "user.token";
    BASE_URL = "http://foteba.modafaquers.com.br/api/atleta/login";

    constructor(private storage : StorageService,
                private post : PostService) { 
    }

    login(user, pass){
        var json = JSON.stringify({ 'user': user, 'pass': pass });
        var observable = this.post.send(this.BASE_URL, json);
        observable.subscribe(
            success => this.saveToken(success),
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

    private getToken(){        
        return this.storage.get(this.TOKEN_STRING);
    }
}
