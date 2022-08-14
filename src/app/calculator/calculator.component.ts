import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  constructor(private calculatorService: CalculatorService) {}

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

  onNumberButtons(event: Event) {
    if (event.target instanceof HTMLElement) {
      this.calculatorService.appendNumber(event.target.innerText);
      this.prepareDisplay();
    }
  }

  onOperationButtons(event: Event) {
    if (event.target instanceof HTMLElement) {
      this.calculatorService.chooseOperation(event.target.innerText);
      this.prepareDisplay();
    }
  }

  onResetButton(event: Event) {
    if (event.target instanceof HTMLElement) {
      this.calculatorService.clear();
      this.prepareDisplay();
    }
  }

  onDeleteButton(event: Event) {
    if (event.target instanceof HTMLElement) {
      this.calculatorService.delete();
      this.prepareDisplay();
    }
  }
  onScoreButton(event: Event) {
    if (event.target instanceof HTMLElement) {
      this.calculatorService.compute();
      this.prepareDisplay();
    }
  }

  // To Do: dodac zdarzenia reagowania na klawisz
}
