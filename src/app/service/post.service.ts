import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http'

@Injectable()
export class PostService {

    constructor(private http: Http) { }
    BASE_URL = "http://foteba.modafaquers.com.br/api/";

    send(service_url, json) {
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
        if (body.error === true)
            throw body.message;
        
        return body;
    }
}
