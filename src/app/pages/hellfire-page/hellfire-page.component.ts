import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {TilesService} from "../../services/tiles.service";

@Component({
  selector: 'app-hellfire-page',
  templateUrl: './hellfire-page.component.html',
  styleUrls: ['./hellfire-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HellfirePageComponent implements AfterViewInit {
  constructor(
    public headerService: HeaderService,
    public tilesService: TilesService
  ) {}

  ngAfterViewInit() {
    this.headerService.headerAdditionalContent = true;
  }
}
