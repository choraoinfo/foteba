import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../service/noticia.service';

@Component({
    selector: 'app-noticias',
    templateUrl: './noticias.component.html',
    styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

    noticias: Object[];

    constructor(private noticiaService: NoticiaService) { }


    ngOnInit() {
        this.noticias = this.noticiaService.getNoticias();
    }

}
