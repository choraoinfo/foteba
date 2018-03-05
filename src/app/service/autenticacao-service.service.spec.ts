import { TestBed, inject } from '@angular/core/testing';

import { AutenticacaoServiceService } from './autenticacao-service.service';

describe('AutenticacaoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoServiceService]
    });
  });

  it('should be created', inject([AutenticacaoServiceService], (service: AutenticacaoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
