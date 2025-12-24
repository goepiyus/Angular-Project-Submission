import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Basic Calculator';
  expression: string = '';
  result: string = '0';

  add(char: string) {
    this.expression += char;
  }

  clear() {
    this.expression = '';
    this.result = '0';
  }

  evaluate() {
    try {
      // Evaluate the mathematical expression. Keep minimal and straightforward for this exercise.
      // Replace any accidental leading zeros and compute.
      const safeExpr = this.expression.replace(/[^0-9.+\-*/() ]/g, '');
      // eslint-disable-next-line no-new-func
      const val = Function(`return (${safeExpr})`)();
      this.result = String(val ?? '0');
    } catch (e) {
      this.result = 'Error';
    }
  }
}
