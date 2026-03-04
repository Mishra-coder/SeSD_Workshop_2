import { BaseCommand } from './BaseCommand';
import { GitHubService } from '../services/GitHubService';
import chalk from 'chalk';

export class GitHubCommand extends BaseCommand {
  private githubService: GitHubService;

  constructor(program: any) {
    super(program);
    this.githubService = new GitHubService();
  }

  register(): void {
    this.program
      .command('github <username>')
      .description('Get GitHub user information')
      .action(async (username: string) => {
        await this.fetchAndDisplayUserInfo(username);
      });
  }

  private async fetchAndDisplayUserInfo(username: string): Promise<void> {
    try {
      console.log(chalk.yellow('Fetching GitHub user info...'));
      const user = await this.githubService.getUserInfo(username);
      
      this.displayUserInfo(user);
    } catch (error) {
      console.log(chalk.red('Error: User not found or API error'));
    }
  }

  private displayUserInfo(user: any): void {
    console.log(chalk.cyan('\nGitHub User Information:'));
    console.log(chalk.white(`Username: ${user.login}`));
    console.log(chalk.white(`Name: ${user.name || 'N/A'}`));
    console.log(chalk.white(`Bio: ${user.bio || 'N/A'}`));
    console.log(chalk.white(`Public Repos: ${user.public_repos}`));
    console.log(chalk.white(`Followers: ${user.followers}`));
    console.log(chalk.white(`Following: ${user.following}`));
    console.log(chalk.white(`Profile: ${user.html_url}`));
  }
}
