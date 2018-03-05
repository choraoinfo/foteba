import { Component, OnInit } from '@angular/core';
import { AutenticacaoServiceService } from '../../service/autenticacao-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private autenticacaoService : AutenticacaoServiceService) { }

    ngOnInit() {
    }

    doLogin(){
        this.autenticacaoService.login();
    }
}
