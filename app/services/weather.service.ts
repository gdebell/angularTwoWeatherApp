import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  constructor(private http: Http) {
    console.log('Weather service initialized');
  }

  getWeather () {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=f6187afd9079bcd2d16808655aca0eb1')
      .map(res => res.json());
  }
}
