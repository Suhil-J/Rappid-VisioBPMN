import { TestBed } from '@angular/core/testing';

import { VisioBPMNServiceService } from './visio-bpmnservice.service';

describe('VisioBPMNServiceService', () => {
  let service: VisioBPMNServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisioBPMNServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
