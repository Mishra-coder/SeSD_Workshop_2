import { BaseCommand } from './BaseCommand';
import chalk from 'chalk';

export class GreetCommand extends BaseCommand {
  register(): void {
    this.program
      .command('greet <name>')
      .description('Greet a user by name')
      .option('-f, --formal', 'Use formal greeting')
      .action((name: string, options: { formal?: boolean }) => {
        this.executeGreeting(name, options.formal);
      });
  }

  private executeGreeting(name: string, isFormal?: boolean): void {
    if (isFormal) {
      console.log(chalk.blue(`Good day, ${name}. It's a pleasure to meet you.`));
    } else {
      console.log(chalk.green(`Hey ${name}! Welcome to DevTools CLI!`));
    }
  }
}
