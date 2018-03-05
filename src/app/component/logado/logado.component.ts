import { Component, OnInit } from '@angular/core';
import { AutenticacaoServiceService } from '../../service/autenticacao-service.service';

@Component({
    selector: 'app-logado',
    templateUrl: './logado.component.html',
    styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

    constructor(private autenticacaoService : AutenticacaoServiceService) { }

    ngOnInit() {
    }

    doLogout(){
        this.autenticacaoService.logout();
    }

}
