import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  currentOperand: string = '';
  previousOperand: string = '';
  operation: string | null = null;

  constructor() {
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = null;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number: string) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand + number.toString();
  }
  chooseOperation(operation: string) {
    if (this.currentOperand === '' && this.previousOperand !== '') {
      this.operation = operation;
    }
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') this.compute();

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;

      case '-':
        computation = prev - current;
        break;

      case 'x':
        computation = prev * current;
        break;

      case '/':
        computation = prev / current;
        break;

      default:
        return;
    }
    this.currentOperand = computation.toString();
    this.operation = null;
    this.previousOperand = '';
  }

  getDisplayNumber(number: string) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else return integerDisplay;
  }

  updateDisplay(
    currentOperandTextElement: HTMLElement | null,
    previousOperandTextElement: HTMLElement | null
  ) {
    if (
      currentOperandTextElement != null &&
      previousOperandTextElement != null
    ) {
      currentOperandTextElement.innerText = this.getDisplayNumber(
        this.currentOperand
      );

      if (this.operation != null) {
        const conditions = ['+', '-', 'x', '/'];

        //sprawdza czy wyrażenie zawiera już operatora
        if (
          conditions.some((el) =>
            previousOperandTextElement.innerText.includes(el)
          )
        ) {
          previousOperandTextElement.innerText.slice(0, -1);
        }

        previousOperandTextElement.innerText = `${this.getDisplayNumber(
          this.previousOperand
        )} ${this.operation}`;
      } else {
        previousOperandTextElement.innerText = '';
      }
    } else return;
  }
}
