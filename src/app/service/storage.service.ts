import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    localStorage;
    constructor() {
        this.localStorage = window.localStorage;
    }

    save(key, value){
        this.localStorage.setItem(key, value);
    }

    get(key){
        return this.localStorage.getItem(key);
    }

    delete(key){
        this.localStorage.removeItem(key);
    }
}
