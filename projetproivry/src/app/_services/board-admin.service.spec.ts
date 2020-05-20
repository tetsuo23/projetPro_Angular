import { TestBed } from '@angular/core/testing';

import { BoardAdminService } from './board-admin.service';

describe('BoardAdminService', () => {
  let service: BoardAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
