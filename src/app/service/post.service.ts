import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http'
import { BehaviorSubject } from '../../../node_modules/rxjs/BehaviorSubject';

@Injectable()
export class PostService {

    BASE_URL = "http://foteba.modafaquers.com.br/api/";
    private isLoading = false;
    private observableLoading: BehaviorSubject<boolean>;

    constructor(private http: Http) { 
        this.observableLoading = new BehaviorSubject<boolean>(this.isLoading);
    }

    send(service_url, json) {
        this.isLoading = true;
        this.observableLoading.next(this.isLoading);
        var params = json;
        var cabe = new Headers();
        cabe.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.BASE_URL + service_url,
            params, {
                headers: cabe
            })
            .map(res => this.process(res));        
    }

    private process(response){
        var body = response.json();
        this.isLoading = false;
        this.observableLoading.next(this.isLoading);
        if (body.error === true)
            throw body.message;
                
        return body;        
    }

    public getLoadingWatcher() {
        return this.observableLoading;
    }
}
