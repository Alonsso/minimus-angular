import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppWeatherCardComponent } from './app-weather-card.component';

@NgModule({
    declarations: [
        AppWeatherCardComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        AppWeatherCardComponent,
    ],
})

export class AppWeatherCardModule { }