import {AfterContentInit, AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {TilesService} from "../../services/tiles.service";

@Component({
  selector: 'app-classic-game-page',
  templateUrl: './classic-game-page.component.html',
  styleUrls: ['./classic-game-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassicGamePageComponent implements AfterViewInit {
  showTiles!: boolean;

  constructor(public headerService: HeaderService, public tilesService: TilesService) {}

  ngAfterViewInit() {
    this.headerService.headerAdditionalContent = true;
  }
}
