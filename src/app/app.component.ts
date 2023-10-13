import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {TilesService} from "./services/tiles.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Pexesos';

  constructor(public tilesService: TilesService, public renderer: Renderer2) {
    this.tilesService.renderer = renderer;
  }

  ngOnInit() {}
}
