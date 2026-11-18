import { TestBed } from '@angular/core/testing';

import { Dexiapi } from './dexiapi';

describe('Dexiapi', () => {
  let service: Dexiapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dexiapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
