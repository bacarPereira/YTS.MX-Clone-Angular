import { TestBed } from '@angular/core/testing';

import { SpinerService } from './spiner.service';

describe('SpinerService', () => {
  let service: SpinerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show spiner()', () => {
    service.showSpiner();
    expect(service.isLoading).toBeTruthy();
  });

  it('should hide spiner()', () => {
    service.hideSpiner();
    expect(service.isLoading).toBeFalsy();
  });
});
