import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppWeatherCardComponent } from './app-weather-card/app-weather-card.component';
import { AppAddCardComponent } from './app-add-card/app-add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppWeatherCardComponent,
    AppAddCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
