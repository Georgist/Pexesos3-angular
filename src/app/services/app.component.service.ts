import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

interface GameStates {
  gameIsTouched: false;
  gameHasStarted: false;
  gameIsLost: false;
  gameIsWon: false;
  gameRestart: false;
}

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  wonGameModal = false;

  private readonly gameStatesSubject = new BehaviorSubject<GameStates>({
    gameIsTouched: false,
    gameHasStarted: false,
    gameIsLost: false,
    gameIsWon: false,
    gameRestart: false,
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

  setGameIsWon() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsWon: true});
  }
  resetGameIsWon() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsWon: false});
  }
  get gameIsWonValue() {
    return this.gameStatesSubject.getValue().gameIsWon;
  }

/*  setGameIsLost() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsLost: true});
  }
  resetGameIsLost() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameIsLost: false});
  }*/

  setGameRestart() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameRestart: true});
  }
  resetGameRestart() {
    this.gameStatesSubject.next(<any>{...this.currentGameStatesValue, gameRestart: false});
  }
  get gameRestartValue() {
    return this.gameStatesSubject.getValue().gameRestart;
  }

  showRestartGameModal(){
    this.setGameRestart();
  }
  hideRestartGameModal(){
    this.resetGameRestart();
  }

  showWonModal(){
    this.setGameIsWon();
  }
  hideWonModal(){
    this.resetGameIsWon();
  }
}
