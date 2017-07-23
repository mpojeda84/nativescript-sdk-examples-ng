import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { GameDay } from "./down-for-volley/entities/game-day";
import { GameDayListService } from "./game-day-list.service";
import { Observable} from "rxjs/Observable";
import { ObservableArray, ChangedData, ChangeType } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    templateUrl: "game-day-list.component.html",
    providers: [GameDayListService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GameDayListComponent implements OnInit{

    upcomingGameDays: Observable<Array<GameDay>>;
    error: any;

    constructor(
        private gameDayListService: GameDayListService
    ) {
        
    }

    ngOnInit(): void {
        this.getGameDays();
    }    

    getGameDays(): void {    
        this.upcomingGameDays = this.gameDayListService.getConfiguredGameDays();
  }


}
