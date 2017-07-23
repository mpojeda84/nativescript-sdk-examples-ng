import { Player } from "./player";
export class GameDay {
    constructor(public id: Number, public date: Date, public rainProbability: Number, players: Array<Player>) { }
}
