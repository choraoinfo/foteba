import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../service/noticia.service';
import { Noticia } from '../../entity/noticia';

@Component({
    selector: 'app-noticias',
    templateUrl: './noticias.component.html',
    styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

    promiseNoticias: Promise<Noticia[]>;
    noticias: Noticia[];

    constructor(private noticiaService: NoticiaService) { }

    ngOnInit() {
        this.promiseNoticias = this.noticiaService.getNoticias();
        this.promiseNoticias.then(
            noticias => this.noticias = noticias,
            error => console.log(error));
    }
}
