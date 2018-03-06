import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../service/autenticacao.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private autenticacaoService : AutenticacaoService) { }

    ngOnInit() {
    }

    doLogin(){
        this.autenticacaoService.login();
    }
}
