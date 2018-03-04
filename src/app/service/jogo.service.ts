import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Jogo } from '../entity/jogo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JogoService {
    
	constructor(private http : Http) { }

	getProximosJogos() : Promise<Jogo[]> {
        return this.http.get("http://foteba.modafaquers.com.br/api/jogos/proximos")
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
