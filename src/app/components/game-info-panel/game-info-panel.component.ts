import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {timer} from "rxjs";
import {TilesService} from "../../services/tiles.service";

@Component({
  selector: 'app-game-info-panel',
  templateUrl: './game-info-panel.component.html',
  styleUrls: ['./game-info-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameInfoPanelComponent {
  timeCounted = 0;
  timerDisplay: any; // TODO

  constructor(public tilesService: TilesService) {
    //this.tilesService.timerDisplay = this.timeCounter();
  }

 /* ngOnInit() {
    this.timeCounter();
    console.log(this.timerDisplay);
  }

  timeCounter() {
    timer(0, 1000).subscribe(ec => {
      this.timeCounted++;
      this.timerDisplay = this.getDisplayTimer(this.timeCounted);
    });
  }

  getDisplayTimer(time: number) {
    const hours = '0' + Math.floor(time / 3600);
    const minutes = '0' + Math.floor(time % 3600 / 60);
    const seconds = '0' + Math.floor(time % 3600 % 60);

    return {
      hours: { digit1: hours.slice(-2, -1), digit2: hours.slice(-1) },
      minutes: { digit1: minutes.slice(-2, -1), digit2: minutes.slice(-1) },
      seconds: { digit1: seconds.slice(-2, -1), digit2: seconds.slice(-1) },
    };
  }*/

}
