import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onChangeTheme() {
    const wrapper = document.getElementById('wrapper');

    if (wrapper?.classList.contains('first-theme')) {
      wrapper.classList.toggle('first-theme');
      wrapper.classList.toggle('second-theme');
    } else if (wrapper?.classList.contains('second-theme')) {
      wrapper.classList.toggle('second-theme');
      wrapper.classList.toggle('third-theme');
    } else if (wrapper?.classList.contains('third-theme')) {
      wrapper.classList.toggle('third-theme');
      wrapper.classList.toggle('first-theme');
    }
  }
}
