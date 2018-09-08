import { Component, OnInit, Input } from '@angular/core';
import { Atleta } from '../../entity/atleta';

@Component({
    selector: 'app-cartao',
    templateUrl: './cartao.component.html',
    styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

    @Input()
    atleta: Atleta;
    @Input()
    imagem: string;

    constructor() { }

    ngOnInit() {
    }

}
