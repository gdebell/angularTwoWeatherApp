import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather',
  template: `
    <h1>Hello {{name}}.</h1>
    <p> {{ city }} </p>
    <p> {{ temp }} º F </p>
    <p> {{ description }} </p>
    <p> {{ icon }} </p>
    <img src="{{ icon }}" alt="Smiley face" height="42" width="42">
    `,
  providers: [WeatherService]
})

export class WeatherComponent  {
  name: string;
  email: string;
  city: string;
  temp: string;
  description: string;
  icon: string;

  constructor(private weatherService: WeatherService) {
    console.log('Constructor ran!!');
    this.name = 'Gina',
    this.email = 'gdebell@gmail.com'



    this.weatherService.getWeather().subscribe(posts => {
      console.log(posts);
      console.log('icon', posts.weather[0].icon);
      this.city = posts.name;
      this.temp = posts.main.temp;
      this.description = posts.weather[0].main;
      this.icon = 'http://openweathermap.org/img/w/' + posts.weather[0].icon  + '.png';
    })
  }
}
