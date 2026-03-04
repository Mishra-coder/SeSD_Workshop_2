import { BaseCommand } from './BaseCommand';
import { JokeService } from '../services/JokeService';
import chalk from 'chalk';

export class JokeCommand extends BaseCommand {
  private jokeService: JokeService;

  constructor(program: any) {
    super(program);
    this.jokeService = new JokeService();
  }

  register(): void {
    this.program
      .command('joke')
      .description('Get a random programming joke')
      .action(async () => {
        await this.fetchAndDisplayJoke();
      });
  }

  private async fetchAndDisplayJoke(): Promise<void> {
    try {
      console.log(chalk.yellow('Fetching a joke...'));
      const joke = await this.jokeService.getRandomJoke();
      
      this.displayJoke(joke);
    } catch (error) {
      console.log(chalk.red('Error: Could not fetch joke'));
    }
  }

  private displayJoke(joke: any): void {
    console.log(chalk.cyan('\nHere is a joke:'));
    
    if (joke.type === 'twopart') {
      console.log(chalk.white(joke.setup));
      console.log(chalk.green(joke.delivery));
    } else {
      console.log(chalk.white(joke.joke));
    }
  }
}
