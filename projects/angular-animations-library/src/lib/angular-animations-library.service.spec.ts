import { TestBed, inject } from '@angular/core/testing';

import { AngularAnimationsLibraryService } from './angular-animations-library.service';

describe('AngularAnimationsLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularAnimationsLibraryService]
    });
  });

  it('should be created', inject([AngularAnimationsLibraryService], (service: AngularAnimationsLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
