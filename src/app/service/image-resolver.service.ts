import { Injectable } from '@angular/core';

@Injectable()
export class ImageResolverService {

    BASE_URL = 'http://foteba-api.kennethbecker.com.br/';
    constructor() { }

    resolveThumbnailAvatar(atleta) {
        if (!atleta) {
            return;
        }
        return this.BASE_URL + (atleta.avatar === 'no.image.png' && 'img/' + atleta.avatar || atleta.avatar.thumb_url);
    }

    resolveImageAvatar(atleta) {
        if (!atleta) {
            return;
        }
        return this.BASE_URL + (atleta.avatar === 'no.image.png' && 'img/' + atleta.avatar || atleta.avatar.imagem_url);
    }
}
