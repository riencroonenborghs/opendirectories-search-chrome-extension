import { TestBed } from '@angular/core/testing';

import { SavedQueryService } from './saved-query.service';

describe('SavedQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavedQueryService = TestBed.get(SavedQueryService);
    expect(service).toBeTruthy();
  });
});
