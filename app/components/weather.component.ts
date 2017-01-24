import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather',
  template: `
    <h1>Weather Report for {{name}} at {{email}}</h1>
    `,
  providers: [WeatherService]
})

export class WeatherComponent  {
  name: string;
  email: string;

  constructor(private weatherService: WeatherService) {
    console.log('Constructor ran!!');
    this.name = 'Gina',
    this.email = 'gdebell@gmail.com'

    this.weatherService.getWeather().subscribe(posts => {
      console.log(posts);
    })

  }
}
