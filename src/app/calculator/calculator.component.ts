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
    const toggle = document.getElementById('toggle');
    const wrapper = document.getElementById('wrapper');

    if (wrapper?.classList.contains('first-theme')) {
      wrapper.classList.remove('first-theme');
      wrapper.classList.add('second-theme');
    } else if (wrapper?.classList.contains('second-theme')) {
      wrapper.classList.remove('second-theme');
      wrapper.classList.add('third-theme');
    } else if (wrapper?.classList.contains('third-theme')) {
      wrapper.classList.remove('third-theme');
      wrapper.classList.add('first-theme');
    }
  }
}
