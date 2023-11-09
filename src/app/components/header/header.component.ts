import {
  Component,
  ElementRef,
  EventEmitter, HostListener,
  Output, QueryList,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {TilesService} from "../../services/tiles.service";
import {AppComponentService} from "../../services/app.component.service";
import {ModalService} from "../../services/modal.service";
import {StatesService} from "../../services/states.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  @Output() selectBoxValue = new EventEmitter<any>();

  @ViewChildren('difficultySelect', {read: ElementRef}) difficultySelect!: QueryList<ElementRef>;

  //@HostListener('window:keydown.enter', ['$event']) // TODO this is firing 2x twice

  constructor(
    public headerService: HeaderService,
    public tilesService: TilesService,
    public appComponentService: AppComponentService,
    private modalService: ModalService,
    private statesService: StatesService,
  ) {}

  createNewGame(event: MouseEvent) {
    this.headerService.gameDifficultyEasy = Number(this.difficultySelect.first.nativeElement[0].value);
    this.headerService.gameDifficultyMedium = Number(this.difficultySelect.first.nativeElement[1].value);
    //this.headerService.gameDifficultyHell = Number(this.difficultySelect.first.nativeElement[2].value);
    this.headerService.currentGameDifficulty = Number(this.difficultySelect.first.nativeElement.value);

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

    this.tilesService.randomCardFlipSound = this.tilesService.randomCardFlipSoundFn();
    this.tilesService.createPexData(this.headerService.currentGameDifficulty);

    event.preventDefault();
  }
}
