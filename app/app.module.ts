import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { WeatherComponent } from './components/weather.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WeatherComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
