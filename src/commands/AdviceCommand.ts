import { BaseCommand } from './BaseCommand';
import { AdviceService } from '../services/AdviceService';
import chalk from 'chalk';

export class AdviceCommand extends BaseCommand {
  private adviceService: AdviceService;

  constructor(program: any) {
    super(program);
    this.adviceService = new AdviceService();
  }

  register(): void {
    this.program
      .command('advice')
      .description('Get random life advice')
      .action(async () => {
        await this.fetchAndDisplayAdvice();
      });
  }

  private async fetchAndDisplayAdvice(): Promise<void> {
    try {
      console.log(chalk.yellow('Fetching advice...'));
      const data = await this.adviceService.getRandomAdvice();
      
      this.displayAdvice(data);
    } catch (error) {
      console.log(chalk.red('Error: Could not fetch advice'));
    }
  }

  private displayAdvice(data: any): void {
    console.log(chalk.cyan('\nRandom Advice:'));
    console.log(chalk.white(data.slip.advice));
  }
}
