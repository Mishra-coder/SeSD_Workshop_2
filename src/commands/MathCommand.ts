import { BaseCommand } from './BaseCommand';
import chalk from 'chalk';

export class MathCommand extends BaseCommand {
  register(): void {
    this.program
      .command('math <operation> <num1> <num2>')
      .description('Perform basic math operations (add, sub, mul, div)')
      .action((operation: string, num1: string, num2: string) => {
        this.performCalculation(operation, num1, num2);
      });
  }

  private performCalculation(operation: string, num1: string, num2: string): void {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    if (isNaN(a) || isNaN(b)) {
      console.log(chalk.red('Error: Invalid numbers'));
      return;
    }
    
    const result = this.calculate(operation.toLowerCase(), a, b);
    
    if (result !== null) {
      console.log(chalk.green(`\nResult: ${result}`));
    }
  }

  private calculate(operation: string, a: number, b: number): number | null {
    switch (operation) {
      case 'add':
        return a + b;
      case 'sub':
        return a - b;
      case 'mul':
        return a * b;
      case 'div':
        if (b === 0) {
          console.log(chalk.red('Error: Division by zero'));
          return null;
        }
        return a / b;
      default:
        console.log(chalk.red('Error: Invalid operation. Use: add, sub, mul, div'));
        return null;
    }
  }
}
