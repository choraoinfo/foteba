import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Headers } from '@angular/http';
import { BehaviorSubject } from '../../../node_modules/rxjs/BehaviorSubject';

@Injectable()
export class PostService {

    BASE_URL = 'http://foteba.modafaquers.com.br/api/';
    private isLoading = 0;
    private observableLoading: BehaviorSubject<number>;
    private message: string;
    private observableError: BehaviorSubject<string>;

    constructor(private http: Http) {
        this.observableLoading = new BehaviorSubject<number>(this.isLoading);
        this.observableError = new BehaviorSubject<string>(this.message);
    }

    send(service_url, json) {
        this.isLoading++;
        this.message = '';
        this.observableError.next(this.message);
        this.observableLoading.next(this.isLoading);
        const params = json;
        const cabe = new Headers();
        cabe.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.BASE_URL + service_url,
            params, {
                headers: cabe
            })
            .map(res => this.process(res)).share();
    }

    private process(response) {
        const body = response.json();
        this.isLoading--;
        this.observableLoading.next(this.isLoading);

        if (body.error === true) {
            this.message = body.message;
            this.observableError.next(this.message);
            throw body;
        }

        return body;
    }

    public getLoadingWatcher() {
        return this.observableLoading;
    }

    public getErrorWatcher() {
        return this.observableError;
    }
}
