import { Injectable } from '@angular/core';
import { GetterService } from './getter.service';
import { Noticia } from '../entity/noticia';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoticiaService {

    NOTICIAS = "noticias";

    constructor(private getter : GetterService) { }

    getNoticias(): Observable<Noticia[]> {
        return this.getter.get(this.NOTICIAS);
    }
}
