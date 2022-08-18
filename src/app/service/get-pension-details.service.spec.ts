import { TestBed } from '@angular/core/testing';

import { GetPensionDetailsService } from './get-pension-details.service';

describe('GetPensionDetailsService', () => {
  let service: GetPensionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPensionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
