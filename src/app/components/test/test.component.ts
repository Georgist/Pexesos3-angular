import { Component, ViewEncapsulation } from '@angular/core';
import {TimerService} from "../../services/timer.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent {

  constructor(public timerService: TimerService) {}
}
