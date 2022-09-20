import { Component, Host, HostListener } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  constructor(private calculatorService: CalculatorService) {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const keyValue = event.key;

    if (keyValue === '*') this.onOperationButtons('x');
    if (keyValue === '-' || keyValue === '+' || keyValue === '/') {
      this.onOperationButtons(keyValue);
    }
    if (keyValue.toLowerCase() === 'backspace') {
      this.onDeleteButton(keyValue);
    }
    if (keyValue.toLowerCase() === 'delete') {
      this.onResetButton(keyValue);
    }
    if (keyValue.toLowerCase() === 'enter' || keyValue === '=') {
      this.onScoreButton(keyValue);
    }
    if (keyValue === ',' || keyValue === '.') this.onNumberButtons('.');
    for (let i = 0; i <= 9; i++) {
      if (event.key === `${i}`) {
        this.onNumberButtons(keyValue);
      }
    }
  }

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

  prepareDisplay() {
    const currentOperandTextElement = document.querySelector(
      '.current-operand '
    ) as HTMLElement | null;

    const previousOperandTextElement = document.querySelector(
      '.previous-operand '
    ) as HTMLElement | null;

    this.calculatorService.updateDisplay(
      currentOperandTextElement,
      previousOperandTextElement
    );
  }

  onNumberButtons(event: Event | string) {
    if (typeof event === 'string') {
      this.calculatorService.appendNumber(event);
    } else if (event.target instanceof HTMLElement) {
      this.calculatorService.appendNumber(event.target.innerText);
    }
    this.prepareDisplay();
  }

  onOperationButtons(event: Event | string) {
    if (typeof event === 'string') {
      this.calculatorService.chooseOperation(event);
    } else if (event.target instanceof HTMLElement) {
      this.calculatorService.chooseOperation(event.target.innerText);
    }
    this.prepareDisplay();
  }

  onResetButton(event: Event | string) {
    if (typeof event === 'string' || event.target instanceof HTMLElement) {
      this.calculatorService.clear();
      this.prepareDisplay();
    }
  }

  onDeleteButton(event: Event | string) {
    if (typeof event === 'string' || event.target instanceof HTMLElement) {
      this.calculatorService.delete();
      this.prepareDisplay();
    }
  }
  onScoreButton(event: Event | string) {
    if (typeof event === 'string' || event.target instanceof HTMLElement) {
      this.calculatorService.compute();
      this.prepareDisplay();
    }
  }

  // To Do: dodac zdarzenia reagowania na klawisz//
}
