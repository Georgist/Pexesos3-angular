import { Injectable } from '@angular/core';
import {TimerService} from "./timer.service";
import {ModalService} from "./modal.service";
import {StatesService} from "./states.service";
import {MovesService} from "./moves.service";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  constructor(
    private statesService: StatesService,
    private modalService: ModalService,
    private timerService: TimerService,
    private movesService: MovesService,
    private dataService: DataService,
  ) {}

  startGame() {
    this.statesService.setGameHasStarted();
    this.timerService.timerStart();
  }

  resetGame() {
    this.statesService.resetGameHasStarted();
    this.statesService.resetGameIsTouched();
    this.timerService.timerReset();
    this.movesService.movesReset();
  }

  finishGame() {
    setTimeout(() => {
      this.modalService.showWonModal();

      this.dataService.fanfareSound.volume = 0.7;
      this.dataService.fanfareSound.play();
    }, 350);
  }
}
