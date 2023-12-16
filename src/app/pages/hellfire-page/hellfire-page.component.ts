import {AfterViewInit, Component, HostListener, OnDestroy, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {AppComponentService} from "../../services/app.component.service";
import {DataService, GameModesTypes} from "../../services/data.service";
import {ModesService} from "../../services/modes.service";
import {fromEvent, Subscription} from "rxjs";

@Component({
  selector: 'app-hellfire-page',
  templateUrl: './hellfire-page.component.html',
  styleUrls: ['./hellfire-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HellfirePageComponent implements OnInit, AfterViewInit, OnDestroy {
  popstateSubs!: Subscription;

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

  ngOnInit() {
    this.popstateSubs = fromEvent(window, 'popstate')
      .subscribe((event) => {
        if(event.type === "popstate") {
          this.renderer.removeClass(document.body, 'hellfire-mode');
        }
      }
    );
  }

  ngAfterViewInit() {
    this.headerService.headerAdditionalContent = true;
  }

  ngOnDestroy() {
    this.popstateSubs.unsubscribe();
  }
}
