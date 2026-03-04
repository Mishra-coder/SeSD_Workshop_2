import { BaseCommand } from './BaseCommand';
import chalk from 'chalk';

export class TimeCommand extends BaseCommand {
  register(): void {
    this.program
      .command('time')
      .description('Display current date and time')
      .option('-u, --utc', 'Show UTC time')
      .action((options: { utc?: boolean }) => {
        this.displayTime(options.utc);
      });
  }

  private displayTime(isUtc?: boolean): void {
    const now = new Date();
    
    if (isUtc) {
      this.displayUtcTime(now);
    } else {
      this.displayLocalTime(now);
    }
  }

  private displayUtcTime(date: Date): void {
    console.log(chalk.cyan('\nCurrent UTC Time:'));
    console.log(chalk.white(date.toUTCString()));
  }

  private displayLocalTime(date: Date): void {
    console.log(chalk.cyan('\nCurrent Local Time:'));
    console.log(chalk.white(date.toLocaleString()));
    console.log(chalk.gray(`Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`));
  }
}
