import { TestBed } from '@angular/core/testing';

import { DexiService } from './dexi.service';

describe('DexiService', () => {
  let service: DexiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DexiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
