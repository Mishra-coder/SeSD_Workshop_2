import { ApiService } from './ApiService';

interface CryptoData {
  [key: string]: {
    usd: number;
    usd_24h_change: number;
  };
}

export class CryptoService extends ApiService {
  constructor() {
    super('https://api.coingecko.com/api/v3');
  }

  async getCryptoPrice(symbol: string): Promise<CryptoData> {
    return this.get<CryptoData>('/simple/price', {
      ids: symbol,
      vs_currencies: 'usd',
      include_24hr_change: true
    });
  }
}
