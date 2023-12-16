import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TilesService} from "./services/tiles.service";
import {HeaderService} from "./services/header.service";
import {TimerService} from "./services/timer.service";
import {ModalService} from "./services/modal.service";
import {StatesService} from "./services/states.service";
import {MovesService} from "./services/moves.service";
import {DataService} from "./services/data.service";
import {PairsService} from "./services/pairs.service";

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
    public movesService: MovesService,
    public headerService: HeaderService,
    public modalService: ModalService,
    public statesService: StatesService,
    private dataService: DataService,
    protected pairsService: PairsService,
  ) {}

  ngOnInit() {
    this.statesService.gameStates$.subscribe();
  }

  okStartNewGame() {
    // TODO unify this method with createNewGame() in header component
    this.pairsService.currentLength = 0;

    this.statesService.resetGameIsTouched();
    this.timerService.timerReset();
    this.movesService.movesReset();

    this.headerService.setDifficulty();

    this.tilesService.randomCardFlipSound = this.tilesService.randomCardFlipSoundFn();
    this.dataService.createPexData(this.headerService.currentDifficulty);

    this.modalService.hideRestartGameModal();
    this.timerService.timerStart();

    return;
  }
}
