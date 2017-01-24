import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather',
  template: `
    <h1>Hello {{name}}.</h1>
    <p> {{ city }} </p>
    <p> {{ temp }} º F </p>

    `,
  providers: [WeatherService]
})

export class WeatherComponent  {
  name: string;
  email: string;
  city: string;
  temp: string;

  constructor(private weatherService: WeatherService) {
    console.log('Constructor ran!!');
    this.name = 'Gina',
    this.email = 'gdebell@gmail.com'



    this.weatherService.getWeather().subscribe(posts => {
      console.log(posts);
      this.city = posts.name;
      this.temp = posts.main.temp;

    })

  }
}
