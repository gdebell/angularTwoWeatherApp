import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  moduleId: module.id,
  selector: 'weather',
  templateUrl: `weather.component.html`,
  providers: [WeatherService]
})


export class WeatherComponent  {
  name: string;
  email: string;
  city: string;
  temp: number;
  description: string;
  icon: string;
  news: string[];
  date: number = Date.now();

  constructor(private weatherService: WeatherService) {
    console.log('Constructor ran!!');
    console.log(this.date);
    this.name = 'Gina',
    this.email = 'gdebell@gmail.com'

    this.weatherService.getWeather().subscribe(posts => {
      this.city = posts.name;
      this.temp = parseInt(posts.main.temp);
      this.description = posts.weather[0].main;
      this.icon = 'http://openweathermap.org/img/w/' + posts.weather[0].icon  + '.png';
    })

    this.weatherService.getNews().subscribe(posts => {
      this.news = posts.articles;
    })

  }

}
