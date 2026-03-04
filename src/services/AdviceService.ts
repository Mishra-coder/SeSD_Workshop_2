import { ApiService } from './ApiService';

interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

export class AdviceService extends ApiService {
  constructor() {
    super('https://api.adviceslip.com');
  }

  async getRandomAdvice(): Promise<AdviceResponse> {
    return this.get<AdviceResponse>('/advice');
  }
}
