import { TestBed } from '@angular/core/testing';

import { WhatisService } from './whatis.service';

describe('WhatisService', () => {
  let service: WhatisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
