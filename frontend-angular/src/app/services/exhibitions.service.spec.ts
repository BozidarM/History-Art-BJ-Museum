import { TestBed } from '@angular/core/testing';

import { ExhibitionsService } from './exhibitions.service';

describe('ExhibitionsService', () => {
  let service: ExhibitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhibitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
