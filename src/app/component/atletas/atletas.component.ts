import { Component, OnInit } from '@angular/core';
import { AtletaService } from '../../service/atleta.service';
import { Atleta } from '../../entity/atleta';

@Component({
    selector: 'app-atletas',
    templateUrl: './atletas.component.html',
    styleUrls: ['./atletas.component.css']
})
export class AtletasComponent implements OnInit {

    promiseAtletas : Promise<Atleta[]>;
    atletas : Atleta[];

    constructor(private atletaService : AtletaService) { }

    ngOnInit() {
        this.promiseAtletas = this.atletaService.getAtletas();
        this.promiseAtletas.then(
            atletas => this.atletas = atletas,
            error =>  console.log(error));
    }

}
