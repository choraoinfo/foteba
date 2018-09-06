import { Injectable } from '@angular/core';
import { Noticia } from '../entity/noticia';
import { Observable } from 'rxjs/Observable';
import { GetterService } from './getter.service';

@Injectable()
export class NoticiaService {

    NOTICIAS = 'noticias';

    constructor(private getter: GetterService) { }

    getNoticias(): Observable<Noticia[]> {
        return this.getter.get(this.NOTICIAS);
    }
}
