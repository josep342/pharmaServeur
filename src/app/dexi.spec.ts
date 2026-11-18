import { TestBed } from '@angular/core/testing';

import { Dexi } from './dexi';

describe('Dexi', () => {
  let service: Dexi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dexi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
