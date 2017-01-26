import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  constructor(private http: Http) {
    console.log('Weather service initialized');
    setInterval(function(){
        location.reload();
        console.log("logging every 5 seconds");
    },600000);
  }

  getWeather () {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=f6187afd9079bcd2d16808655aca0eb1')
      .map(res => res.json());
  }

  getNews () {
    return this.http.get('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=f8a87108fdd84d0f84b5496f031d757f')
      .map(res => res.json());
  }

  convertTime () {
    return Date.now();
  }
}
