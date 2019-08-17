import { TestBed } from '@angular/core/testing';

import { ChromeStorageService } from './chrome-storage.service';

describe('ChromeStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChromeStorageService = TestBed.get(ChromeStorageService);
    expect(service).toBeTruthy();
  });
});
