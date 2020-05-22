import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardParticipantComponent } from './board-participant.component';

describe('BoardParticipantComponent', () => {
  let component: BoardParticipantComponent;
  let fixture: ComponentFixture<BoardParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
