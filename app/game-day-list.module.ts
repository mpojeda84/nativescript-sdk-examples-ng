import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TitleAndNavButtonModule } from "./directives/title-and-nav-button.module";

import { GameDayListComponent } from "./game-day-list.component";

export const routerConfig = [{
    path: "",
    component: GameDayListComponent
}];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [GameDayListComponent]
})

export class GameDayListModule {
    constructor() { }
}
