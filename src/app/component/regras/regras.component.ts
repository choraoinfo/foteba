import { Component, OnInit } from '@angular/core';
import { RegraService } from '../../service/regra.service';
import { Regra } from '../../entity/regra';

@Component({
    selector: 'app-regras',
    templateUrl: './regras.component.html',
    styleUrls: ['./regras.component.css']
})
export class RegrasComponent implements OnInit {

    promiseRegras: Promise<Regra[]>;
    regras: Regra[];

    constructor(private regraService: RegraService) { }

    ngOnInit() {
        this.promiseRegras = this.regraService.getRegras();
        this.promiseRegras.then(
            regras => this.regras = regras,
            error => console.log(error));
    }

}
