import { Component } from '@angular/core';
import { AutenticacaoServiceService } from './service/autenticacao-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private autenticacaoService : AutenticacaoServiceService){}

    isLogado() {
        return this.autenticacaoService.isUsuarioLogado();
    }
}
