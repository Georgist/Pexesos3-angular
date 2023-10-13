import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-speedrun-game-page',
  templateUrl: './speedrun-game-page.component.html',
  styleUrls: ['./speedrun-game-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeedrunGamePageComponent implements OnInit {

  constructor(public headerService: HeaderService) {}

  ngOnInit() {
    //this.headerService.headerAdditionalContent = true;
  }
}
