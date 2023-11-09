import {Component, ViewEncapsulation} from '@angular/core';
import {TimerService} from "../../services/timer.service";
import {MovesService} from "../../services/moves.service";

@Component({
  selector: 'app-game-info-panel',
  templateUrl: './game-info-panel.component.html',
  styleUrls: ['./game-info-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameInfoPanelComponent {

  constructor(
    public timerService: TimerService,
    public movesService: MovesService,
  ) {}
}
