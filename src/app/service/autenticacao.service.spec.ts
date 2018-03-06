import { TestBed, inject } from '@angular/core/testing';

import { AutenticacaoService } from './autenticacao.service';

describe('AutenticacaoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoService]
    });
  });

  it('should be created', inject([AutenticacaoService], (service: AutenticacaoService) => {
    expect(service).toBeTruthy();
  }));
});
