import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardJuryComponent } from './board-jury.component';

describe('BoardJuryComponent', () => {
  let component: BoardJuryComponent;
  let fixture: ComponentFixture<BoardJuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardJuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
