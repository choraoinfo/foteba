import { Injectable } from '@angular/core';

@Injectable()
export class RegraService {

  constructor() {}

  getRegras(){
      return [{'titulo':'regra1'}, {'titulo' : 'regra2'}];
  }

}
