import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcThirdThemeComponent } from './calc-third-theme.component';

describe('CalcThirdThemeComponent', () => {
  let component: CalcThirdThemeComponent;
  let fixture: ComponentFixture<CalcThirdThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcThirdThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcThirdThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
