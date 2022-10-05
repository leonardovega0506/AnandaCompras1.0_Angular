import { TestBed } from '@angular/core/testing';

import { AnandapiService } from './anandapi.service';

describe('AnandapiService', () => {
  let service: AnandapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnandapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
