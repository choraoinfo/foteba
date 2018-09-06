import { TestBed, inject } from '@angular/core/testing';

import { ImageResolverService } from './image-resolver.service';

describe('ImageResolverService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ImageResolverService]
        });
    });

    it('should be created', inject([ImageResolverService], (service: ImageResolverService) => {
        expect(service).toBeTruthy();
    }));
});
