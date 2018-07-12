import { Component } from '@angular/core';
import { AutenticacaoService } from './service/autenticacao.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    selectedTab =  "tab-home";

    constructor(private autenticacaoService : AutenticacaoService){}

    doLogout(){
        this.autenticacaoService.logout();
    }

}
