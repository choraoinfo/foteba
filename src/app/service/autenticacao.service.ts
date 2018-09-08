import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PostService } from './post.service';
import { Router } from '@angular/router';

@Injectable()
export class AutenticacaoService {

    USER_KEY = 'user_logged';
    SERVICE_URL = 'atleta/login';
    SERVICE_OUT = 'atleta/logout';

    constructor(private storage: StorageService,
        private post: PostService,
        private router: Router) {
    }

    login(user, pass) {
        const json = JSON.stringify({ 'user': user, 'pass': pass });
        const observable = this.post.send(this.SERVICE_URL, json);
        observable.subscribe(
            success => this.saveData(success),
            error => console.log(error)
        );
        return observable;
    }

    private saveData(data) {
        const user = {
            'token': data.message,
            'id': data.user_id,
            'nome': data.user_name,
            'apelido': data.user_nickname
        };
        this.storage.save(this.USER_KEY, JSON.stringify(user));
        this.router.navigate(['']);
    }

    logout() {
        this.post.send(this.SERVICE_OUT, { token: this.getToken() }).subscribe(
            () => { }, error => console.log(error)
        );
        this.storage.delete(this.USER_KEY);
        this.router.navigate(['']);
    }

    isLogged() {
        return this.getLoggedUser() != null;
    }

    getToken() {
        const user = this.getLoggedUser();
        return user == null ? null : user.token;
    }

    private getLoggedUser() {
        const user = this.storage.get(this.USER_KEY);
        return user == null ? null : JSON.parse(user);
    }
}
