import { Component, OnInit, Input } from '@angular/core';
import { GetterService } from '../../service/getter.service';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../../service/post.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

    private getLoading = false;
    private postLoading = false;
    private getWatcher: Subscription;
    private postWatcher: Subscription;

    constructor(private getterService: GetterService,
        private postService: PostService) { }

    ngOnInit() {
        this.getWatcher = this.getterService.getLoadingWatcher().subscribe(
            visible => this.getLoading = visible > 0);
        this.postWatcher = this.postService.getLoadingWatcher().subscribe(
            visible => this.postLoading = visible > 0);
    }

    isLoading() {
        return this.getLoading || this.postLoading;
    }
}
