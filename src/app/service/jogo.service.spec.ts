import { TestBed, inject } from '@angular/core/testing';

import { JogoService } from './jogo.service';

describe('JogosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogoService]
    });
  });

  it('should be created', inject([JogoService], (service: JogoService) => {
    expect(service).toBeTruthy();
  }));
});
