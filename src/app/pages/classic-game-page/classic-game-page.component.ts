import {
  AfterContentInit,
  AfterViewInit,
  Component, ElementRef,
  OnInit, QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {TilesService} from "../../services/tiles.service";
import {AppComponentService} from "../../services/app.component.service";
import {GameInfoPanelComponent} from "../../components/game-info-panel/game-info-panel.component";
import {of} from "rxjs";

@Component({
  selector: 'app-classic-game-page',
  templateUrl: './classic-game-page.component.html',
  styleUrls: ['./classic-game-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassicGamePageComponent implements AfterViewInit {
  @ViewChild(GameInfoPanelComponent) infoPanel!: GameInfoPanelComponent;

  constructor(public headerService: HeaderService, public tilesService: TilesService, public appComponentService: AppComponentService) {}

  ngAfterViewInit() {
    this.headerService.headerAdditionalContent = true;
  }
}
