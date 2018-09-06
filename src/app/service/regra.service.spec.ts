import { TestBed, inject } from '@angular/core/testing';

import { RegraService } from './regra.service';

describe('RegraService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RegraService]
        });
    });

    it('should be created', inject([RegraService], (service: RegraService) => {
        expect(service).toBeTruthy();
    }));
});
