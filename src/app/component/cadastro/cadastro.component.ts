import { Component, OnInit, Input } from '@angular/core';
import { Atleta } from '../../entity/atleta';
import { AtletaService } from '../../service/atleta.service';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { ImageResolverService } from '../../service/image-resolver.service';
import { PostService } from '../../service/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    @Input()
    formulario: FormGroup;

    atleta: Atleta;
    salvando = false;

    constructor(private atletaService: AtletaService,
        private autenticacaoService: AutenticacaoService,
        private imageResolver: ImageResolverService,
        private post: PostService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.carregaAtleta();
    }

    private carregaAtleta(){
        this.atletaService.getAtleta(this.autenticacaoService.getToken()).subscribe(
            atleta => this.sucesso(atleta),
            error => console.log(error));
    }

    private buildForm(){
        this.formulario = this.formBuilder.group({
            token: this.autenticacaoService.getToken(),
            nome : [this.atleta.nome, Validators.required],
            apelido : this.atleta.apelido,
            login : { value : this.atleta.login, disabled : true },
            ativo : { value : this.atleta.ativo, disabled : true },
            machucado : this.atleta.machucado,
            goleiro_fixo : this.atleta.goleiro_fixo,
            avatar : [null],
            senha : [null],
            confirmar_senha : [null] 
        });        
    }

    private sucesso(atleta) {
        this.atleta = atleta;
        this.buildForm();
    }

    getImage() {
        if (this.atleta.avatar)
            return this.imageResolver.resolveImageAvatar(this.atleta);
    }

    doSubmit() {
        if (this.formulario.valid)
            this.salvando = true;
            this.post.send("atleta/cadastro", this.formulario.value)
                .subscribe(
                    success => this.processSuccess(success),
                    error => this.processError(error)
                );
    }

    private processSuccess(success) {        
        this.salvando = false;
        this.formulario.patchValue({
            senha : '',
            confirmar_senha : '',
            avatar : ''
        });
        this.carregaAtleta();
    }

    private processError(error) {
        this.salvando = false;
    }

    isLogado() {
        return this.autenticacaoService.isLogged();
    }

    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.formulario.value.avatar = {
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                }
            };
        }
    }

}

