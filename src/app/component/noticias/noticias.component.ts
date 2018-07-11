import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../service/noticia.service';
import { Noticia } from '../../entity/noticia';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-noticias',
    templateUrl: './noticias.component.html',
    styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

    noticias: Noticia[];

    constructor(private noticiaService: NoticiaService) { }

    ngOnInit() {
        this.noticiaService.getNoticias()
            .subscribe(
                noticias => this.noticias = noticias,
                error => console.log(error)
            );
    }
}
