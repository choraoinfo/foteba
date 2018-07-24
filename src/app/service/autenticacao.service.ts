import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PostService } from './post.service';
import { Router } from '@angular/router';

@Injectable()
export class AutenticacaoService {

    TOKEN_STRING = "user.token";
    SERVICE_URL = "atleta/login";
    SERVICE_OUT = "atleta/logout";

    constructor(private storage: StorageService,
        private post: PostService,
        private router: Router) {
    }

    login(user, pass) {
        var json = JSON.stringify({ 'user': user, 'pass': pass });
        var observable = this.post.send(this.SERVICE_URL, json);
        observable.subscribe(
            success => this.saveToken(success.message),
            error => console.log(error)
        );
        return observable;
    }

    private saveToken(token) {
        this.storage.save(this.TOKEN_STRING, token);
        this.router.navigate([""]);
    }

    logout() {
        this.post.send(this.SERVICE_OUT, { token: this.getToken() }).subscribe(
            () => { }, error => console.log(error)
        );
        this.storage.delete(this.TOKEN_STRING);
        this.router.navigate([""]);
    }

    isLogged() {
        return this.getToken() != null;
    }

    getToken() {
        return this.storage.get(this.TOKEN_STRING);
    }
}
