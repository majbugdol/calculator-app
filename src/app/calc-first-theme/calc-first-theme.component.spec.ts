import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFirstThemeComponent } from './calc-first-theme.component';

describe('CalcFirstThemeComponent', () => {
  let component: CalcFirstThemeComponent;
  let fixture: ComponentFixture<CalcFirstThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcFirstThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcFirstThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
