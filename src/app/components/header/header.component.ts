import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter, HostListener,
  OnInit,
  Output, Query, QueryList,
  ViewChild, ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {TilesService} from "../../services/tiles.service";
import {AppComponentService} from "../../services/app.component.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  @Output() selectBoxValue = new EventEmitter<any>();

  @ViewChildren('difficultySelect', {read: ElementRef}) difficultySelect!: QueryList<ElementRef>;

  @HostListener('window:keydown.enter', ['$event'])
  createNewTiles(event: MouseEvent) {
    this.headerService.gameDifficultyEasy = Number(this.difficultySelect.first.nativeElement[0].value);
    this.headerService.gameDifficultyMedium = Number(this.difficultySelect.first.nativeElement[1].value);
    this.headerService.gameDifficultyHell = Number(this.difficultySelect.first.nativeElement[2].value);
    this.headerService.currentGameDifficulty = Number(this.difficultySelect.first.nativeElement.value);

    if (this.appComponentService.gameIsTouched) {
      if (confirm('Are you sure you want to START new game?')) {
        this.tilesService.createAll(this.headerService.currentGameDifficulty);
      }
      return;
    }

    this.tilesService.createAll(this.headerService.currentGameDifficulty);
    event.preventDefault();
  }

  constructor(public headerService: HeaderService, public tilesService: TilesService, public appComponentService: AppComponentService) {}
}
