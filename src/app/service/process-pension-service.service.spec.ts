import { TestBed } from '@angular/core/testing';

import { ProcessPensionServiceService } from './process-pension-service.service';

describe('ProcessPensionServiceService', () => {
  let service: ProcessPensionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessPensionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
