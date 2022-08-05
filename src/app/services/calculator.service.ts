import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  currentOperand: any = '';
  previousOperand: any = '';
  operation: string | undefined = '';

  constructor() {
    this.clear();
  }

  Console(currentOperandTextElement: any) {
    console.log(currentOperandTextElement);
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number: string) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation: string) {
    if (this.currentOperand === '') return;
    if (this.previousOperand != '') this.compute();
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
    this.currentOperand = computation;
  }

  getDisplayNumber(number: string) {
    return number;
  }

  updateDisplay(
    currentOperandTextElement: HTMLElement | null,
    previousOperandTextElement: HTMLElement | null
  ) {
    if (
      currentOperandTextElement != null &&
      previousOperandTextElement != null
    ) {
      currentOperandTextElement.innerText = this.currentOperand;

      if (this.operation != null) {
        previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
      }
    }
  }
  // gdzies tutaj jeszce trzeba usunąć  previousOperandTextElement.innerText  kiedy naciśnie się wynik

  clearPrevOperand(previousOperandTextElement: HTMLElement | null) {
    if (previousOperandTextElement != null) {
      previousOperandTextElement.innerText = '';
    }
  }
}
