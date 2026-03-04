import { BaseCommand } from './BaseCommand';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';

export class FileInfoCommand extends BaseCommand {
  register(): void {
    this.program
      .command('fileinfo <filename>')
      .description('Get information about a file')
      .action((filename: string) => {
        try {
          const stats = fs.statSync(filename);
          const ext = path.extname(filename);
          
          console.log(chalk.cyan('\nFile Information:'));
          console.log(chalk.white(`Name: ${path.basename(filename)}`));
          console.log(chalk.white(`Path: ${path.resolve(filename)}`));
          console.log(chalk.white(`Size: ${this.formatBytes(stats.size)}`));
          console.log(chalk.white(`Extension: ${ext || 'none'}`));
          console.log(chalk.white(`Created: ${stats.birthtime.toLocaleString()}`));
          console.log(chalk.white(`Modified: ${stats.mtime.toLocaleString()}`));
          console.log(chalk.white(`Is Directory: ${stats.isDirectory()}`));
        } catch (error) {
          console.log(chalk.red(`Error: File not found or inaccessible`));
        }
      });
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }
}
