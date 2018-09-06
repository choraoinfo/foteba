import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs/Subscription';
import { GetterService } from '../../service/getter.service';
import { PostService } from '../../service/post.service';

@Component({
    selector: 'app-mensagem',
    templateUrl: './mensagem.component.html',
    styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

    private getWatcher: Subscription;
    private postWatcher: Subscription;

    private getMessage: string;
    private postMessage: string;

    constructor(private getter: GetterService,
        private poster: PostService) { }

    ngOnInit() {
        this.getWatcher = this.getter.getErrorWatcher().subscribe(
            message => this.getMessage = message);
        this.postWatcher = this.poster.getErrorWatcher().subscribe(
            message => this.postMessage = message);
    }

    showMessage() {
        return this.getMessage || this.postMessage;
    }

    getGetMessage() {
        return this.getMessage;
    }

    getPostMessage() {
        return this.postMessage;
    }

    dismiss() {
        this.getMessage = '';
        this.postMessage = '';
    }
}
