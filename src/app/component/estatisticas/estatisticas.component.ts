import { Component, OnInit } from '@angular/core';
import { EstatisticaService } from '../../service/estatistica.service';
import { Estatistica } from '../../entity/estatistica';

@Component({
    selector: 'app-estatisticas',
    templateUrl: './estatisticas.component.html',
    styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

    estatistica: Estatistica;

    constructor(private estatisticaService: EstatisticaService) { }

    ngOnInit() {
        this.estatisticaService.getEstatisticas().subscribe(
            estatistica => {
                this.estatistica = estatistica;
            },
            error => console.log(error)
        );
    }
}
