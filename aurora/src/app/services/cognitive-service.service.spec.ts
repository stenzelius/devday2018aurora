import { TestBed, inject } from '@angular/core/testing';

import { CognitiveService } from './cognitive-service.service';

describe('CognitiveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognitiveService]
    });
  });

  it('should be created', inject([CognitiveService], (service: CognitiveService) => {
    expect(service).toBeTruthy();
  }));
});
