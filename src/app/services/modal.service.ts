import { Injectable } from '@angular/core';
import {TimerService} from "./timer.service";
import {StatesService} from "./states.service";
import {TilesService} from "./tiles.service";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  toggleRestartGameModal = false;
  toggleWonGameModal = false;

  constructor(
    private tilesService: TilesService,
    private timerService: TimerService,
    private statesService: StatesService,
  ) {}

  showRestartGameModal(){
    this.toggleRestartGameModal = true;
  }
  hideRestartGameModal(){
    this.toggleRestartGameModal = false;
  }

  showWonModal(){
    this.toggleWonGameModal = true;
    this.timerService.timerStop();
  }
  hideWonModal(){
    this.toggleWonGameModal = false;
    this.statesService.resetGameHasStarted();
    this.statesService.resetGameIsTouched();
    this.statesService.resetGameIsWon();
    this.timerService.timerReset();

    this.tilesService.resetAllData();
  }
}
