import { ApiService } from './ApiService';

interface Joke {
  type: string;
  joke?: string;
  setup?: string;
  delivery?: string;
}

export class JokeService extends ApiService {
  constructor() {
    super('https://v2.jokeapi.dev');
  }

  async getRandomJoke(): Promise<Joke> {
    return this.get<Joke>('/joke/Programming?safe-mode');
  }
}
