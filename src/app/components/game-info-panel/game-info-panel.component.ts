import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {timer} from 'rxjs';
import {GameInfoPanelService} from "./game-info-panel.service";

@Component({
  selector: 'app-game-info-panel',
  templateUrl: './game-info-panel.component.html',
  styleUrls: ['./game-info-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameInfoPanelComponent implements OnInit {

  constructor(public gameInfoPanelService: GameInfoPanelService) {}

  ngOnInit() {
    this.gameInfoPanelService.startTimer$.subscribe(() => {
      this.timeCounter();
    });

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

  timeCounter() {
    this.gameInfoPanelService.timeCounted = 0;
    this.gameInfoPanelService.timerDisplay = '00:00';

    // TODO pause timer when modal is open

    this.gameInfoPanelService.timerSubscription = timer(0, 1000).subscribe(ec => {
      this.gameInfoPanelService.timeCounted++;
      this.gameInfoPanelService.timerDisplay = this.getDisplayTimer(this.gameInfoPanelService.timeCounted);
    });
  }

  getDisplayTimer(time: number) {
    //const h = Math.floor(time / 3600).toString().padStart(2,'0'),
    const m = Math.floor(time % 3600 / 60).toString().padStart(2,'0'),
          s = Math.floor(time % 60).toString().padStart(2,'0');

    return `${m}:${s}`;
  }
}
