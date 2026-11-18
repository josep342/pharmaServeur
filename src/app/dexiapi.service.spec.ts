import { TestBed } from '@angular/core/testing';

import { DexiapiService } from './dexiapi.service';

describe('DexiapiService', () => {
  let service: DexiapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DexiapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
