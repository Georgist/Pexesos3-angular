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
import {GameInfoPanelService} from "../game-info-panel/game-info-panel.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  newGameBtnIsClicked = false;

  @Output() selectBoxValue = new EventEmitter<any>();

  @ViewChildren('difficultySelect', {read: ElementRef}) difficultySelect!: QueryList<ElementRef>;

  @HostListener('window:keydown.enter', ['$event']) // TODO this is firing 2x twice
  createNewGame(event: MouseEvent) {
    this.headerService.gameDifficultyEasy = Number(this.difficultySelect.first.nativeElement[0].value);
    this.headerService.gameDifficultyMedium = Number(this.difficultySelect.first.nativeElement[1].value);
    this.headerService.gameDifficultyHell = Number(this.difficultySelect.first.nativeElement[2].value);
    this.headerService.currentGameDifficulty = Number(this.difficultySelect.first.nativeElement.value);

    this.appComponentService.setGameHasStarted();
    this.gameInfoPanelService.startTimerNext();
    console.log('startTimerNext');

    if(this.newGameBtnIsClicked) { // should be only on second click
      this.gameInfoPanelService.timerUnsubscribe();
      this.gameInfoPanelService.movesDisplayUnsubscribe();
    }
    this.newGameBtnIsClicked = true;

    this.tilesService.randomCardFlipSound = this.tilesService.randomCardFlipSoundFn();

    if (this.appComponentService.gameIsTouchedValue) {
      this.appComponentService.showRestartGameModal();

      return;
    }

    this.tilesService.createAll(this.headerService.currentGameDifficulty);

    event.preventDefault();
  }

  constructor(public headerService: HeaderService, public tilesService: TilesService, public appComponentService: AppComponentService, private gameInfoPanelService: GameInfoPanelService) {}
}
