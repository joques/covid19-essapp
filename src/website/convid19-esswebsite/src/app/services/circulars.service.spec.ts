import { TestBed } from '@angular/core/testing';

import { CircularsService } from './circulars.service';

describe('CircularsService', () => {
  let service: CircularsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircularsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
