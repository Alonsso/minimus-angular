import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppAddCardComponentModule } from './app-add-card/app-add-card.module';
import { AppWeatherCardModule } from './app-weather-card/app-weather-card.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAddCardComponentModule,
    AppWeatherCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
