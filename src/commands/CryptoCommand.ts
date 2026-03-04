import { BaseCommand } from './BaseCommand';
import { CryptoService } from '../services/CryptoService';
import chalk from 'chalk';

export class CryptoCommand extends BaseCommand {
  private cryptoService: CryptoService;

  constructor(program: any) {
    super(program);
    this.cryptoService = new CryptoService();
  }

  register(): void {
    this.program
      .command('crypto <symbol>')
      .description('Get cryptocurrency price (e.g., bitcoin, ethereum)')
      .action(async (symbol: string) => {
        await this.fetchAndDisplayCryptoPrice(symbol);
      });
  }

  private async fetchAndDisplayCryptoPrice(symbol: string): Promise<void> {
    try {
      console.log(chalk.yellow('Fetching crypto price...'));
      const data = await this.cryptoService.getCryptoPrice(symbol.toLowerCase());
      
      const crypto = data[symbol.toLowerCase()];
      
      if (!crypto) {
        console.log(chalk.red('Error: Cryptocurrency not found'));
        return;
      }
      
      this.displayCryptoInfo(symbol, crypto);
    } catch (error) {
      console.log(chalk.red('Error: Could not fetch crypto price'));
    }
  }

  private displayCryptoInfo(symbol: string, crypto: any): void {
    console.log(chalk.cyan(`\n${symbol.toUpperCase()} Price:`));
    console.log(chalk.white(`USD: $${crypto.usd.toLocaleString()}`));
    console.log(chalk.white(`24h Change: ${crypto.usd_24h_change.toFixed(2)}%`));
  }
}
