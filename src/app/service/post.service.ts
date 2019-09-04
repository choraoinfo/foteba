import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from '../../../node_modules/rxjs/BehaviorSubject';

@Injectable()
export class PostService {

    BASE_URL = 'https://foteba.kennethbecker.com.br/api/';
    private isLoading = 0;
    private observableLoading: BehaviorSubject<number>;
    private message: string;
    private observableError: BehaviorSubject<string>;

    constructor(private http: HttpClient) {
        this.observableLoading = new BehaviorSubject<number>(this.isLoading);
        this.observableError = new BehaviorSubject<string>(this.message);
    }

    send(service_url, json) {
        this.isLoading++;
        this.message = '';
        this.observableError.next(this.message);
        this.observableLoading.next(this.isLoading);
        const params = json;
        const cabe = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post(this.BASE_URL + service_url,
            params, {
                headers: cabe
            })
            .map(res => this.process(res)).share();
    }

    private process(response) {
        const body = response;
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
