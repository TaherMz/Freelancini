import { TestBed } from '@angular/core/testing';

import { PostulationService } from './postulation.service';

describe('PostulationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostulationService = TestBed.get(PostulationService);
    expect(service).toBeTruthy();
  });
});
