import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../../service/extrato.service';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { Extrato } from '../../entity/extrato';

@Component({
    selector: 'app-extrato',
    templateUrl: './extrato.component.html',
    styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

    extrato: Extrato;

    constructor(private extratoService: ExtratoService,
        private autenticacaoService: AutenticacaoService) { }

    ngOnInit() {
        const token = this.autenticacaoService.getToken();
        this.extratoService.getExtrato(token).subscribe(
            extrato => this.extrato = extrato,
            error => console.log(error));
    }
}
