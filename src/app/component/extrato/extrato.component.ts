import { Component, OnInit } from '@angular/core';
import { Lancamento } from '../../entity/lancamento';
import { ExtratoService } from '../../service/extrato.service';
import { AutenticacaoService } from '../../service/autenticacao.service';

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
