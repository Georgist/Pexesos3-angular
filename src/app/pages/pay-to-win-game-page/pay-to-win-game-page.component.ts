import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {AppComponentService} from "../../services/app.component.service";

@Component({
  selector: 'app-pay-to-win-game-page',
  templateUrl: './pay-to-win-game-page.component.html',
  styleUrls: ['./pay-to-win-game-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PayToWinGamePageComponent implements OnInit {

  constructor(
    private appComponentService: AppComponentService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.headerService.headerAdditionalContent = true;
  }
}
