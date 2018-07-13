import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/delay";

@Injectable()
export class GetterService {

    BASE_URL = "http://foteba.modafaquers.com.br/api/";
    
    constructor(private http: Http) { }

    get(service : string) {
        return this.http.get(this.BASE_URL + service)
            .map(this.extractData)
            // .delay(10000)
            .catch(this.handleErrorPromise);
    }

	private extractData(response: Response) {
        var body = response.json();
        if (body.error === true)
            throw body.message;
        
        return body;
    }   

    private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
    }	

}
