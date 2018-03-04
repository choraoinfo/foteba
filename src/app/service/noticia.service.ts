import { Injectable } from '@angular/core';

@Injectable()
export class NoticiaService {

	constructor() { }

	getNoticias() {
		return [{'titulo':'Noticia1', 'texto' : 'texto1'},{'titulo':'Noticia2', 'texto' : 'texto2'}];
	}
}
