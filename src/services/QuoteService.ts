import { ApiService } from './ApiService';

interface Quote {
  content: string;
  author: string;
}

export class QuoteService extends ApiService {
  constructor() {
    super('https://api.quotable.io');
  }

  async getRandomQuote(): Promise<Quote> {
    return this.get<Quote>('/random');
  }
}
