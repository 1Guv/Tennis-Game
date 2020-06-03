import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TennisGameComponent, PlayerCLass } from './tennis-game.component';

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

  it('should render title', () => {
    const fixture = TestBed.createComponent(TennisGameComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tennis Score');
  });

  it('should give one number', () => {
    const result = component.getRandomOneOrZero();
    console.log('should give one number', result);
    expect(result.toString().length).toBe(1, 'unexpected random number result');
  });

});
