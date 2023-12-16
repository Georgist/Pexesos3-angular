import { Injectable } from '@angular/core';
import {TimerService} from "./timer.service";
import {StatesService} from "./states.service";
import {MovesService} from "./moves.service";
import {DataService} from "./data.service";
import {PairsService} from "./pairs.service";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  toggleRestartGameModal = false;
  toggleWonGameModal = false;

  constructor(
    private dataService: DataService,
    private timerService: TimerService,
    private statesService: StatesService,
    private movesService: MovesService,
    private pairsService: PairsService,
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
    this.movesService.movesReset();

    this.dataService.resetAllData();

    this.pairsService.initialLength = 0;
    this.pairsService.currentLength = 0;
  }
}
