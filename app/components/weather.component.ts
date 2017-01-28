import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather',
  template: `
    <h1>Hello {{name}}.</h1>
    <p> {{ city }} </p>
    <p> {{ temp }} º F </p>
    <p> {{ description }} </p>
    <img src="{{ icon }}" alt="weather icon" height="100" width="100">
    <ul><li *ngFor="let headline of news">{{ headline.description }}</li></ul>
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
  news: string[];

  constructor(private weatherService: WeatherService) {
    console.log('Constructor ran!!');
    this.name = 'Gina',
    this.email = 'gdebell@gmail.com'

    this.weatherService.getWeather().subscribe(posts => {
      console.log(posts);
      this.city = posts.name;
      this.temp = parseInt(posts.main.temp);
      this.description = posts.weather[0].main;
      this.icon = 'http://openweathermap.org/img/w/' + posts.weather[0].icon  + '.png';
    })

    this.weatherService.getNews().subscribe(posts => {
      this. news = posts.articles;
      console.log(posts.articles);
      console.log(posts.articles[0].description);
    })

  }
}
