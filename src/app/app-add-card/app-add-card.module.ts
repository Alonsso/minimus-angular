import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppAddCardComponent } from "./app-add-card.component";

@NgModule({
    declarations: [
        AppAddCardComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        AppAddCardComponent,
    ],
})

export class AppAddCardComponentModule {}