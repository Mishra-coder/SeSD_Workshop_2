import { BaseCommand } from './BaseCommand';
import { QuoteService } from '../services/QuoteService';
import chalk from 'chalk';

export class QuoteCommand extends BaseCommand {
  private quoteService: QuoteService;

  constructor(program: any) {
    super(program);
    this.quoteService = new QuoteService();
  }

  register(): void {
    this.program
      .command('quote')
      .description('Get a random inspirational quote')
      .action(async () => {
        await this.fetchAndDisplayQuote();
      });
  }

  private async fetchAndDisplayQuote(): Promise<void> {
    try {
      console.log(chalk.yellow('Fetching a quote...'));
      const quote = await this.quoteService.getRandomQuote();
      
      this.displayQuote(quote);
    } catch (error) {
      console.log(chalk.red('Error: Could not fetch quote'));
    }
  }

  private displayQuote(quote: any): void {
    console.log(chalk.cyan('\nQuote of the moment:'));
    console.log(chalk.white(`"${quote.content}"`));
    console.log(chalk.gray(`- ${quote.author}`));
  }
}
