import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http'

@Injectable()
export class PostService {

    constructor(private http: Http) { }

    send(base_url, json) {
        var params = json;
        var cabe = new Headers();
        cabe.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(base_url,
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
