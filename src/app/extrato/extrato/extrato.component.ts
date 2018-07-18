import { Component, OnInit } from '@angular/core';
import { GetterService } from '../../service/getter.service';
import { Lancamento } from '../../entity/lancamento';
import { Observable } from 'rxjs/Observable';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { ExtratoService } from '../../service/extrato.service';

@Component({
    selector: 'app-extrato',
    templateUrl: './extrato.component.html',
    styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

    lancamentos: Lancamento[];

    constructor(private extratoService : ExtratoService,
        private autenticacaoService: AutenticacaoService) {}

    ngOnInit() {
        let token = this.autenticacaoService.getToken();
        this.extratoService.getLancamentos(token).subscribe(
            lctos => this.lancamentos = lctos,
            error => console.log(error));
    }

}
