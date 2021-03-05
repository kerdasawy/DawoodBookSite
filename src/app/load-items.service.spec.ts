import { TestBed } from '@angular/core/testing';

import { LoadItemsService } from './load-items.service';

describe('LoadItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadItemsService = TestBed.get(LoadItemsService);
    expect(service).toBeTruthy();
  });
});
