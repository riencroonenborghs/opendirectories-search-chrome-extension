import { TestBed } from '@angular/core/testing';

import { QueryTypeService } from './query-type.service';

describe('QueryTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryTypeService = TestBed.get(QueryTypeService);
    expect(service).toBeTruthy();
  });
});
