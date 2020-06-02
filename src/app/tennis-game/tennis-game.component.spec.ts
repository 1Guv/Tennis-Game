import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisGameComponent } from './tennis-game.component';

describe('TennisGameComponent', () => {
  let component: TennisGameComponent;
  let fixture: ComponentFixture<TennisGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
