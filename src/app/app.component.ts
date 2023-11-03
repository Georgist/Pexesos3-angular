import {Component, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {TilesService} from "./services/tiles.service";
import {AppComponentService} from "./services/app.component.service";
import {HeaderService} from "./services/header.service";
import {GameInfoPanelService} from "./components/game-info-panel/game-info-panel.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Pexesos';

  constructor(public tilesService: TilesService, public gameInfoPanelService: GameInfoPanelService, public headerService: HeaderService, public renderer: Renderer2, public appComponentService: AppComponentService) {
    this.tilesService.renderer = renderer;
  }

  ngOnInit() {
    this.appComponentService.gameStates$.subscribe();
    console.log(this.appComponentService.gameIsTouchedValue);
  }

  okStartNewGame() {
    this.tilesService.createAll(this.headerService.currentGameDifficulty);
    this.appComponentService.hideRestartGameModal();

    return;
  }
}
