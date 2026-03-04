import { ApiService } from './ApiService';

interface WeatherData {
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
    };
    humidity: number;
    wind_kph: number;
  };
  location: {
    name: string;
    country: string;
  };
}

export class WeatherService extends ApiService {
  constructor() {
    super('https://wttr.in');
  }

  async getWeather(city: string): Promise<any> {
    return this.get(`/${city}?format=j1`);
  }
}
