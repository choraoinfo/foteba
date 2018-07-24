import { Component, OnInit, Input } from '@angular/core';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Input()
    formulario: FormGroup;
    errorMessage;

    constructor(private autenticacaoService: AutenticacaoService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            user: [null],
            pass: [null],
        })
    }

    doLogin() {
        if (!this.formulario.valid)
            return;
        let pass = Md5.hashStr(this.formulario.value.pass);
        let user = this.formulario.value.user;
        this.autenticacaoService.login(user, pass).subscribe(
            result => this.processResponse(result),
            error => this.processError(error));
    }

    private processError(error) {
        this.formulario.patchValue(
            { pass: '' }
        );
    }

    private processResponse(result) {
        this.formulario.reset();
    }

    isLogado() {
        return this.autenticacaoService.isLogged();
    }

    esqueci() {
        alert("Que pena, amiguinho. :)");
    }
}
