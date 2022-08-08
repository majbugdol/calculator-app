import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.calcInit();
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

  getElements() {
    const currentOperandTextElement = document.querySelector(
      '.current-operand '
    ) as HTMLElement | null;

    const previousOperandTextElement = document.querySelector(
      '.previous-operand '
    ) as HTMLElement | null;

    const numberButtons = document.querySelectorAll(
      '.no-btn'
    ) as NodeListOf<HTMLElement> | null;
    const operationButtons = document.querySelectorAll(
      '.operation-btn'
    ) as NodeListOf<HTMLElement> | null;

    const resetButton = document.querySelector(
      '.reset-btn'
    ) as HTMLElement | null;

    const deleteButton = document.querySelector(
      '.del-btn'
    ) as HTMLElement | null;

    const scoreButton = document.querySelector(
      '.score-btn'
    ) as HTMLElement | null;
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

  calcInit() {
    const numberButtons = document.querySelectorAll(
      '.no-btn'
    ) as NodeListOf<HTMLElement> | null;
    const operationButtons = document.querySelectorAll(
      '.operation-btn'
    ) as NodeListOf<HTMLElement> | null;

    const resetButton = document.querySelector(
      '.reset-btn'
    ) as HTMLElement | null;

    const deleteButton = document.querySelector(
      '.del-btn'
    ) as HTMLElement | null;

    const scoreButton = document.querySelector(
      '.score-btn'
    ) as HTMLElement | null;

    numberButtons?.forEach((button) => {
      if (numberButtons != null) {
        button.addEventListener('click', () => {
          this.calculatorService.appendNumber(button.innerText);
          this.prepareDisplay();
        });
      }
    });

    operationButtons?.forEach((button) => {
      if (operationButtons != null) {
        button.addEventListener('click', () => {
          this.calculatorService.chooseOperation(button.innerText);
          this.prepareDisplay();
        });
      }
    });

    resetButton?.addEventListener('click', () => {
      if (resetButton != null) {
        this.calculatorService.clear();
        this.prepareDisplay();
      }
    });

    deleteButton?.addEventListener('click', () => {
      if (deleteButton != null) {
        this.calculatorService.delete();
        this.prepareDisplay();
      }
    });

    scoreButton?.addEventListener('click', () => {
      if (scoreButton != null) {
      }
      this.calculatorService.compute();
      this.prepareDisplay();
    });
  }
}
