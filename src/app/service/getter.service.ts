import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GetterService {

    BASE_URL = "http://foteba.modafaquers.com.br/api/";

    constructor(private http: Http) { }

    get(service : string) {
        return this.http.get(this.BASE_URL + service)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }   

    private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
    }	

}
