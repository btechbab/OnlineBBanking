import { TestBed } from '@angular/core/testing';

import { AdmnService } from './admn-service.service';

describe('AdmnServiceService', () => {
  let service: AdmnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
