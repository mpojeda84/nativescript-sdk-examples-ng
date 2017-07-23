import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable as Observable } from "rxjs/Observable";
import { GameDay } from './down-for-volley/entities/game-day';

import "rxjs/add/operator/map";

@Injectable()
export class GameDayListService {

  constructor(private http: Http) { }

  getConfiguredGameDays(): Observable<Array<GameDay>> {
      return this.http.get('http://localhost:3000/game-days')
      .map((res: Response) => res.json());
  }

}