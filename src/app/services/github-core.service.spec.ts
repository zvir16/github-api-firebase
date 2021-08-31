import { TestBed } from '@angular/core/testing';

import { GithubCoreService } from './github-core.service';

describe('GithubCoreService', () => {
  let service: GithubCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
