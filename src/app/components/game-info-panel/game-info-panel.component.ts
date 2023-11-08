import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GameInfoPanelService} from "./game-info-panel.service";
import {TimerService} from "../../services/timer.service";

@Component({
  selector: 'app-game-info-panel',
  templateUrl: './game-info-panel.component.html',
  styleUrls: ['./game-info-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameInfoPanelComponent implements OnInit {

  constructor(
    public timerService: TimerService,
    public gameInfoPanelService: GameInfoPanelService
  ) {}

  ngOnInit() {
    this.gameInfoPanelService.movesSubscription = this.gameInfoPanelService.movesDisplay$.subscribe(() => {
      this.movesCounter();
    });
  }

  movesCounter() {
    this.gameInfoPanelService.movesCounterPair.push('clicked');

    if(this.gameInfoPanelService.movesCounterPair.length === 2) {
      this.gameInfoPanelService.movesDisplay++;
      this.gameInfoPanelService.movesCounterPair = [];
    }
  }
}
