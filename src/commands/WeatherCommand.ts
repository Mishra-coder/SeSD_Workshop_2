import { BaseCommand } from './BaseCommand';
import { WeatherService } from '../services/WeatherService';
import chalk from 'chalk';

export class WeatherCommand extends BaseCommand {
  private weatherService: WeatherService;

  constructor(program: any) {
    super(program);
    this.weatherService = new WeatherService();
  }

  register(): void {
    this.program
      .command('weather <city>')
      .description('Get current weather for a city')
      .action(async (city: string) => {
        await this.fetchAndDisplayWeather(city);
      });
  }

  private async fetchAndDisplayWeather(city: string): Promise<void> {
    try {
      console.log(chalk.yellow('Fetching weather data...'));
      const data = await this.weatherService.getWeather(city);
      
      this.displayWeatherInfo(data);
    } catch (error) {
      console.log(chalk.red('Error: Could not fetch weather data'));
    }
  }

  private displayWeatherInfo(data: any): void {
    const current = data.current_condition[0];
    const location = data.nearest_area[0];
    
    console.log(chalk.cyan(`\nWeather in ${location.areaName[0].value}, ${location.country[0].value}:`));
    console.log(chalk.white(`Temperature: ${current.temp_C}°C / ${current.temp_F}°F`));
    console.log(chalk.white(`Condition: ${current.weatherDesc[0].value}`));
    console.log(chalk.white(`Humidity: ${current.humidity}%`));
    console.log(chalk.white(`Wind: ${current.windspeedKmph} km/h`));
  }
}
