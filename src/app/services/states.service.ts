import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface GameStates {
  gameHasStarted: false;
  gameIsTouched: false;
  gameIsWon: false;
  gameIsLost: false;
}

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor() { }
  private readonly gameStatesSubject = new BehaviorSubject<GameStates>({
    gameHasStarted: false,
    gameIsTouched: false,
    gameIsWon: false,
    gameIsLost: false,
  });
  readonly gameStates$ = this.gameStatesSubject.asObservable();

  get currentGameStatesValue() {
    return this.gameStatesSubject.getValue();
  }

  setGameIsTouched() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsTouched: true});
  }
  resetGameIsTouched() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsTouched: false});
  }
  get gameIsTouchedValue() {
    return this.gameStatesSubject.getValue().gameIsTouched;
  }

  setGameHasStarted() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameHasStarted: true});
  }
  resetGameHasStarted() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameHasStarted: false});
  }
  get gameHasStartedValue() {
    return this.gameStatesSubject.getValue().gameHasStarted;
  }

  setGameIsWon() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsWon: true});
  }
  resetGameIsWon() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsWon: false});
  }
  get gameIsWonValue() {
    return this.gameStatesSubject.getValue().gameIsWon;
  }

  /* setGameIsLost() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsLost: true});
  }
  resetGameIsLost() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsLost: false});
  }*/

}
