import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Player } from "./../entities/player";

let players = [
    new Player("Mark", false),
    new Player("Vanessa", true),
    new Player("Ashlee", true)
];

@Component({
    moduleId: module.id,
    templateUrl: "./player-list.component.html"
})
export class PlayerListComponent {
    public players: Array<Player>;

    constructor() {
        this.players = [];

        for (let i = 0; i < players.length; i++) {
            this.players.push(players[i]);
        }
    }
}
