import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSecondThemeComponent } from './calc-second-theme.component';

describe('CalcSecondThemeComponent', () => {
  let component: CalcSecondThemeComponent;
  let fixture: ComponentFixture<CalcSecondThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcSecondThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcSecondThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
