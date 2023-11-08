import {Component, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {TilesService} from "./services/tiles.service";
import {AppComponentService} from "./services/app.component.service";
import {HeaderService} from "./services/header.service";
import {GameInfoPanelService} from "./components/game-info-panel/game-info-panel.service";
import {TimerService} from "./services/timer.service";
import {ModalService} from "./services/modal.service";
import {StatesService} from "./services/states.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Pexesos';

  constructor(
    public timerService: TimerService,
    public tilesService: TilesService,
    public gameInfoPanelService: GameInfoPanelService,
    public headerService: HeaderService,
    public renderer: Renderer2,
    public modalService: ModalService,
    public statesService: StatesService) {
      this.tilesService.renderer = renderer;
  }

  ngOnInit() {
    this.statesService.gameStates$.subscribe();
  }

  okStartNewGame() {
    this.statesService.resetGameIsTouched();
    this.timerService.timerReset();

    this.tilesService.randomCardFlipSound = this.tilesService.randomCardFlipSoundFn();
    this.tilesService.createPexData(this.headerService.currentGameDifficulty);

    this.modalService.hideRestartGameModal();
    this.timerService.timerStart();

    return;
  }
}