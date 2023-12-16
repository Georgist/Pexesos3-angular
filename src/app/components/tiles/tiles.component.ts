import {Component, ViewEncapsulation} from '@angular/core';
import {TilesService} from "../../services/tiles.service";
import {PexCurrentPair} from "./tiles.types";
import {AppComponentService} from "../../services/app.component.service";
import {ModalService} from "../../services/modal.service";
import {StatesService} from "../../services/states.service";
import {MovesService} from "../../services/moves.service";
import {DataService} from "../../services/data.service";
import {ModesService} from "../../services/modes.service";
import {PairsService} from "../../services/pairs.service";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TilesComponent {
  constructor(
    private modalService: ModalService,
    public tilesService: TilesService,
    protected dataService: DataService,
    public movesService: MovesService,
    protected modesService: ModesService,
    public appComponentService: AppComponentService,
    private statesService: StatesService,
    protected pairsService: PairsService,
  ) {}

  updateVisitedItem(currentItem: HTMLElement) {
    currentItem.classList.add("visited");
  }

  flipItemBack() {
    this.pairsService.currentPair.forEach((item) => {
      setTimeout(() => {
        item.selector.classList.remove("flipped", "matched");
      }, 1000);
    });
  }

  matchItem(item: any) {
    setTimeout(() => {
      // TODO fix sound when more items match in short time, play sound every time
      this.dataService.successSound.volume = 0.8;
      this.dataService.successSound.play();
    }, 200);

    this.pairsService.currentPair.forEach((item: PexCurrentPair) => {
      item.selector.classList.add("matched");
      item.selector.classList.remove("flipped");
    });

    this.pairsService.updateAllPairs(String(item.dataset?.['pairValue']))

    if (this.pairsService.allPairsIsEmpty) {
      this.appComponentService.finishGame();
    }
  }

  pairItems(item: any) {
    if (item === null) {
      return;
    }

    const flipSound = new Audio(this.tilesService.randomCardFlipSound);
    flipSound.volume = .3;
    flipSound.play();

    this.statesService.setGameIsTouched();
    this.movesService.movesIncrement();

    item.classList.add("flipped");
    this.updateVisitedItem(item);
    this.pairsService.updateCurrentPair(item);

    if (!this.pairsService.currentPairIsFull) {
      return;
    }
    if (this.pairsService.currentPairIsFull && this.pairsService.isPair) {
      this.matchItem(item);
      this.pairsService.resetCurrentPair();
    }
    if (this.pairsService.currentPairIsFull && !this.pairsService.isPair) {
      this.flipItemBack();
      this.pairsService.resetCurrentPair();
    }
  }
}

// STATES:
// currentPair is empty or 1 item(continue filling)
// currentPair is full
  // - reset
  // - make it match
