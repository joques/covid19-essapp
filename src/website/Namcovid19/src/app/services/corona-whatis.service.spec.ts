import { TestBed } from '@angular/core/testing';

import { CoronaWhatisService } from './corona-whatis.service';

describe('CoronaWhatisService', () => {
  let service: CoronaWhatisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaWhatisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
