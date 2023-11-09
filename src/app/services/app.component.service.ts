import { Injectable } from '@angular/core';
import {TimerService} from "./timer.service";
import {ModalService} from "./modal.service";
import {StatesService} from "./states.service";
import {MovesService} from "./moves.service";

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  successSound = new Audio('assets/sounds/success-effect.mp3');
  fanfareSound = new Audio('assets/sounds/fanfare-effect.mp3');

  constructor(
    private statesService: StatesService,
    private modalService: ModalService,
    private timerService: TimerService,
    private movesService: MovesService
  ) {}

  startGame() {
    this.statesService.setGameHasStarted();
    this.timerService.timerStart();
  }

  resetGame() {
    this.statesService.resetGameHasStarted();
    this.statesService.resetGameIsTouched();
    this.timerService.timerReset();
    this.movesService.reset();
  }

  finishGame() {
    setTimeout(() => {
      this.modalService.showWonModal();

      this.fanfareSound.volume = 0.7;
      this.fanfareSound.play();
    }, 350);
  }
}
