import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { PostService } from '../../service/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-balaniar',
    templateUrl: './balaniar.component.html',
    styleUrls: ['./balaniar.component.css']
})
export class BalaniarComponent implements OnInit {

    private DESCONFIRMATION_SERVICE = 'jogo/desconfirmacao';
    private jogoId = null;

    constructor(private autenticacaoService: AutenticacaoService,
        private postService: PostService,
        private router: Router,
        private activateRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activateRoute
            .queryParamMap
            .subscribe(params => this.get(params.get('jogoid')), error => console.log(error));
    }

    private get(id) {
        this.jogoId = id;
    }

    desconfirmar() {
        if (!this.jogoId) {
            return;
        }
        const json: any = {};
        json.jogo = this.jogoId;
        json.atleta = this.autenticacaoService.getToken();
        this.postService.send(this.DESCONFIRMATION_SERVICE, json).subscribe(
            () => this.sucesso(), error => this.erro(error)
        );
    }

    private sucesso() {
        this.router.navigate(['']);
    }

    private erro(error) {
        console.log(error);
    }
}
