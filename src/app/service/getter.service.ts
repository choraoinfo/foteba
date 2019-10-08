import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AutenticacaoService } from './autenticacao.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class GetterService {

    private loading = 0;
    private observableLoading: BehaviorSubject<number>;
    private message: string;
    private observableError: BehaviorSubject<string>;

    BASE_URL = 'http://foteba.kennethbecker.com.br/api/';

    constructor(private http: HttpClient,
        private autenticacaoService: AutenticacaoService) {
        this.observableLoading = new BehaviorSubject<number>(this.loading);
        this.observableError = new BehaviorSubject<string>(this.message);
    }

    get(service: string) {
        this.loadingOn();
        const obs = this.http.get(this.BASE_URL + service).map(this.extractData).share(); // .delay(1000);
        obs.subscribe(
            () => this.loadingOff(), error => this.processError(error)
        );
        return obs;
    }

    private extractData(response) {
        const body = response;
        if (body.error === true) {
            throw body;
        }

        return body;
    }

    private loadingOn() {
        this.loading++;
        this.observableLoading.next(this.loading);
        this.message = '';
        this.observableError.next(this.message);
    }

    private processError(error) {
        if (error.logout === true) {
            this.autenticacaoService.logout();
        }
        this.message = error.message;
        this.observableError.next(this.message);
        this.loadingOff();
    }

    private loadingOff() {
        this.loading--;
        this.observableLoading.next(this.loading);
    }

    public getLoadingWatcher() {
        return this.observableLoading;
    }

    public getErrorWatcher() {
        return this.observableError;
    }
}
