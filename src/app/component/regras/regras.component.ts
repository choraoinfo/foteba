import { Component, OnInit } from '@angular/core';
import { RegraService } from '../../service/regra.service';
import { Regra } from '../../entity/regra';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-regras',
    templateUrl: './regras.component.html',
    styleUrls: ['./regras.component.css']
})
export class RegrasComponent implements OnInit {

    regras: Regra[];

    constructor(private regraService: RegraService) { }

    ngOnInit() {
        this.regraService.getRegras().subscribe(
            regras => this.regras = regras,
            error => console.log(error));
    }

}
