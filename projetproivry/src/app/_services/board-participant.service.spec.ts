import { TestBed } from '@angular/core/testing';

import { BoardParticipantService } from './board-participant.service';

describe('BoardParticipantService', () => {
  let service: BoardParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
