import { Component, OnInit } from '@angular/core';
import { AtletaService } from '../../service/atleta.service';

@Component({
    selector: 'app-atletas',
    templateUrl: './atletas.component.html',
    styleUrls: ['./atletas.component.css']
})
export class AtletasComponent implements OnInit {

    atletas : Object[];
    
    constructor(private atletaService : AtletaService) { }

    ngOnInit() {
        this.atletas = this.atletaService.getAtletas();
    }

}
