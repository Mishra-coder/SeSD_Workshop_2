import { Command } from 'commander';
import { GreetCommand } from '../commands/GreetCommand';
import { FileInfoCommand } from '../commands/FileInfoCommand';
import { GitHubCommand } from '../commands/GitHubCommand';
import { WeatherCommand } from '../commands/WeatherCommand';
import { QuoteCommand } from '../commands/QuoteCommand';
import { MathCommand } from '../commands/MathCommand';
import { TimeCommand } from '../commands/TimeCommand';
import { JokeCommand } from '../commands/JokeCommand';
import { AdviceCommand } from '../commands/AdviceCommand';
import { CryptoCommand } from '../commands/CryptoCommand';

export class CLI {
  private program: Command;

  constructor(program: Command) {
    this.program = program;
  }

  initialize(): void {
    this.program
      .name('devtools')
      .description('A feature-rich CLI tool with API integrations')
      .version('1.0.0');

    new GreetCommand(this.program).register();
    new FileInfoCommand(this.program).register();
    new GitHubCommand(this.program).register();
    new WeatherCommand(this.program).register();
    new QuoteCommand(this.program).register();
    new MathCommand(this.program).register();
    new TimeCommand(this.program).register();
    new JokeCommand(this.program).register();
    new AdviceCommand(this.program).register();
    new CryptoCommand(this.program).register();
  }
}
