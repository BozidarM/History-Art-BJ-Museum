import { TestBed } from '@angular/core/testing';

import { ExhibitsService } from './exhibits.service';

describe('ExhibitsService', () => {
  let service: ExhibitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhibitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
