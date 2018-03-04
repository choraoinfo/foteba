import { Component, OnInit } from '@angular/core';
import { RegraService } from '../../service/regra.service';

@Component({
    selector: 'app-regras',
    templateUrl: './regras.component.html',
    styleUrls: ['./regras.component.css']
})
export class RegrasComponent implements OnInit {

    regras : Object[];

    constructor(private regraService: RegraService) { }

    ngOnInit() {
        this.regras = this.regraService.getRegras();
  }

}
