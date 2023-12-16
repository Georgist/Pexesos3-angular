import {Component, ViewEncapsulation} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ModesService} from "../../services/modes.service";
import {HeaderService} from "../../services/header.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent {

  constructor(
    protected dataService: DataService,
    private modesService: ModesService,
    private headerService: HeaderService,
  ) {
    this.headerService.headerAdditionalContent = false;
  }

  // TODO how to use gameModes or gameModesTypes here?
  setCurrentGameMode(gameMode: string) {
    this.modesService.currentGameMode = gameMode;
  }
}
