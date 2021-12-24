import { TestBed } from '@angular/core/testing';

import { PayeeServicesService } from './payee-services.service';

describe('PayeeServicesService', () => {
  let service: PayeeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayeeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
