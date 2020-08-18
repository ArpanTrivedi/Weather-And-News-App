import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {
  constructor(private weather:HttpClient) { }

  weatherApi(city){
    return this.weather.get((`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9003685684f1027226aefcee27177752`));
  }

}
