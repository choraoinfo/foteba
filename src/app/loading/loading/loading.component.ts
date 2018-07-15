import { Component, OnInit, Input } from '@angular/core';
import { GetterService } from '../../service/getter.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

    shouldShow = false;
    private watcher: Subscription;

    constructor(private getterService: GetterService) { }

    ngOnInit() {
        this.watcher = this.getterService.getLoadingWatcher().subscribe(
            visible => this.shouldShow = visible);
    }
}
