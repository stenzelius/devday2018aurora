import { TestBed, inject } from '@angular/core/testing';

import { CognitiveServiceService } from './cognitive-service.service';

describe('CognitiveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognitiveServiceService]
    });
  });

  it('should be created', inject([CognitiveServiceService], (service: CognitiveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
