import { ApiService } from './ApiService';

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
}

export class GitHubService extends ApiService {
  constructor() {
    super('https://api.github.com');
  }

  async getUserInfo(username: string): Promise<GitHubUser> {
    return this.get<GitHubUser>(`/users/${username}`);
  }
}
