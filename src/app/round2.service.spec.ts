import { TestBed } from '@angular/core/testing';

import { Round2Service } from './round2.service';

describe('Round2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Round2Service = TestBed.get(Round2Service);
    expect(service).toBeTruthy();
  });
});
