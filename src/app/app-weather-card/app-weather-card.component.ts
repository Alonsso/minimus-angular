import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './app-weather-card.component.html',
  styleUrls: ['./app-weather-card.component.css']
})
export class AppWeatherCardComponent implements OnInit {
  
  cityAdded = false;
  maxTemp: number = 100;
  minTemp: number = 0;
  temp: number = 55;

  citesWeather: Object = {};

  state: string = "a";

  cityName:any;

  darkMode: boolean = false;
  
  @Input() addMode:any;

  constructor() { }

  ngOnInit(): void {
  }
  
  addCity(){

  }

  openDetails(){}

}
