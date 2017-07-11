import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PlayerListComponent } from "./player-list.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";


export const routerConfig = [
    {
        path: "",
        component: PlayerListComponent
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        PlayerListComponent
    ]
})

export class PlayerListModule {
    constructor() { }
}
