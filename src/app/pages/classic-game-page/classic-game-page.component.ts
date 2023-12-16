import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {DataService, GameModesTypes} from "../../services/data.service";
import {AppComponentService} from "../../services/app.component.service";
import {ModesService} from "../../services/modes.service";

@Component({
  selector: 'app-classic-game-page',
  templateUrl: './classic-game-page.component.html',
  styleUrls: ['./classic-game-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassicGamePageComponent implements AfterViewInit {

  constructor(
    protected headerService: HeaderService,
    protected dataService: DataService,
    private appComponentService: AppComponentService,
    private modesService: ModesService,
  ) {
    this.modesService.currentGameMode = GameModesTypes.classic;
  }

  ngAfterViewInit() {
    this.headerService.headerAdditionalContent = true;
  }
}
