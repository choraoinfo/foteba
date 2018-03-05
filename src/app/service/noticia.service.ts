import { Injectable } from '@angular/core';
import { GetterService } from './getter.service';
import { Noticia } from '../entity/noticia';

@Injectable()
export class NoticiaService {

    NOTICIAS = "noticias";

    constructor(private getter : GetterService) { }

    getNoticias(): Promise<Noticia[]> {
        return this.getter.get(this.NOTICIAS);
    }
}
