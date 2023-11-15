import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {GameDifficulty, HeaderService} from "../../services/header.service";
import {TilesService} from "../../services/tiles.service";
import {AppComponentService} from "../../services/app.component.service";
import {ModalService} from "../../services/modal.service";
import {StatesService} from "../../services/states.service";
import {DataService} from "../../services/data.service";
import {ModesService} from "../../services/modes.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  @Output() selectBoxValue = new EventEmitter<any>();

  //@HostListener('window:keydown.enter', ['$event']) // TODO bug this is firing 2x twice

  difficultyDefault = GameDifficulty.easy;

  constructor(
    public headerService: HeaderService,
    public tilesService: TilesService,
    public appComponentService: AppComponentService,
    private modalService: ModalService,
    private statesService: StatesService,
    private dataService: DataService,
    protected modesService: ModesService,
  ) {
    this.headerService.difficulty$.subscribe();
  }

  createNewGame(event: MouseEvent) {
    if (this.statesService.gameIsTouchedValue) {
      this.modalService.showRestartGameModal();

      return;
    }

    if (this.statesService.gameHasStartedValue) {
      this.appComponentService.resetGame();
      this.appComponentService.startGame();
    } else {
      this.appComponentService.startGame();
    }

    this.headerService.setDifficulty();
    this.tilesService.randomCardFlipSound = this.tilesService.randomCardFlipSoundFn();
    this.dataService.createPexData(this.headerService.currentDifficulty);

    event.preventDefault();
  }
}
