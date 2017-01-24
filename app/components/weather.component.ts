import { Component } from '@angular/core';

@Component({
  selector: 'weather',
  template: `
    <h1>Weather Report for {{name}} at {{email}}</h1>
    `,
})

export class WeatherComponent  {
  name: `Gina`;
  email: `gdebell@gmail.com`;
}
