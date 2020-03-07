import { TestBed } from '@angular/core/testing';

import { CloudantService } from './cloudant.service';

describe('CloudantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudantService = TestBed.get(CloudantService);
    expect(service).toBeTruthy();
  });
});
