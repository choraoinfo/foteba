import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../service/autenticacao.service';

@Component({
    selector: 'app-logado',
    templateUrl: './logado.component.html',
    styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

    constructor(private autenticacaoService : AutenticacaoService) { }

    ngOnInit() {
    }

    doLogout(){
        this.autenticacaoService.logout();
    }

}
