import { Component, OnInit } from '@angular/core';
import { EstatisticaService } from '../../service/estatistica.service';

@Component({
    selector: 'app-estatisticas',
    templateUrl: './estatisticas.component.html',
    styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

    estatisticas : Object[];

    constructor(private estatisticaService : EstatisticaService) { }

    ngOnInit() {
        // this.estatisticas = this.estatisticaService.getEstatisticas().subscribe(
        //     estatisticas => this.estatisticas = estatisticas,
        //     error => console.log(error)
        // );
    }

}
