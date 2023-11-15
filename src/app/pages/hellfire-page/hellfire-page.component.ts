import {AfterViewInit, Component, Renderer2, ViewEncapsulation} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {AppComponentService} from "../../services/app.component.service";
import {DataService, GameModesTypes} from "../../services/data.service";
import {ModesService} from "../../services/modes.service";

@Component({
  selector: 'app-hellfire-page',
  templateUrl: './hellfire-page.component.html',
  styleUrls: ['./hellfire-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HellfirePageComponent implements AfterViewInit {

  constructor(
    protected headerService: HeaderService,
    private appComponentService: AppComponentService,
    protected dataService: DataService,
    private renderer: Renderer2,
    private modesService: ModesService,
  ) {
    this.modesService.currentGameMode = GameModesTypes.hellfire;
    this.renderer.addClass(document.body, 'hellfire-mode');
  }

  ngAfterViewInit() {
    this.headerService.headerAdditionalContent = true;
  }
}
