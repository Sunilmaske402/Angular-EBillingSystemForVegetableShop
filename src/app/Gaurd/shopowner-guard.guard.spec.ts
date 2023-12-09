import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { shopownerGuardGuard } from './shopowner-guard.guard';

describe('shopownerGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => shopownerGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
