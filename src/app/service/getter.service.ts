import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/delay";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class GetterService {

    private loading = false;
    private observableLoading: BehaviorSubject<boolean>;
    private message: string;
    private observableError: BehaviorSubject<string>;

    BASE_URL = "http://foteba.modafaquers.com.br/api/";

    constructor(private http: Http) {
        this.observableLoading = new BehaviorSubject<boolean>(this.loading);
        this.observableError = new BehaviorSubject<string>(this.message);
    }

    get(service: string) {
        this.loadingOn();
        let obs = this.http.get(this.BASE_URL + service).map(this.extractData).delay(1000);
        obs.subscribe(
            () => this.loadingOff() , () => this.loadingOff()
        );
        return obs;
    }

    private extractData(response) {
        var body = response.json();
        if (body.error === true){
            this.message = body.message;
            this.observableError.next(this.message);
            throw body.message;
        }

        return body;
    }

    private loadingOn() {
        this.loading = true;
        this.observableLoading.next(this.loading);
    }

    private loadingOff() {
        this.loading = false;
        this.observableLoading.next(this.loading);
    }

    public getLoadingWatcher() {
        return this.observableLoading;
    }

    public getErrorWatcher() {
        return this.observableError;
    }
}
