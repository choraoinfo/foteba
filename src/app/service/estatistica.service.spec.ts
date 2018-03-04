import { TestBed, inject } from '@angular/core/testing';

import { EstatisticaService } from './estatistica.service';

describe('EstatisticaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstatisticaService]
    });
  });

  it('should be created', inject([EstatisticaService], (service: EstatisticaService) => {
    expect(service).toBeTruthy();
  }));
});
