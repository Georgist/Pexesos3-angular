import {Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {TilesService} from "../../services/tiles.service";
import {PexCurrentPair} from "./tiles.types";
import {AppComponentService} from "../../services/app.component.service";
import {ModalService} from "../../services/modal.service";
import {StatesService} from "../../services/states.service";
import {MovesService} from "../../services/moves.service";

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
    public movesService: MovesService,
    public appComponentService: AppComponentService,
    private statesService: StatesService,
  ) {}

  updateVisitedItem(id: string | undefined, currentItem: HTMLElement) {
    //let currentItemIndex = this.tilesService.pexData.findIndex(item => item.id === Number(id));

    currentItem.classList.add("visited");
    //this.tilesService.pexData[currentItemIndex].isVisited = true;
  }

  updateMatchedItem(pairValue: string | undefined, matched = true) {
    let currentItemIndexes = this.tilesService.pexData.map((elem, index) => (elem.pairValue === pairValue ? index : '')).filter(String);

    if (matched) {
      setTimeout(() => {
        // TODO fix sound when more items match in short time, play sound every time
        this.appComponentService.successSound.volume = 1;
        this.appComponentService.successSound.play();
      }, 200);

      this.tilesService.currentPair.forEach((item: PexCurrentPair) => {
        item.selector.classList.add("matched");
        item.selector.classList.remove("flipped");
      });

      let pairIndex = this.tilesService.allPairs.indexOf(String(pairValue)); // TODO check this case
      this.tilesService.allPairs.splice(pairIndex, 1);

      if (!this.tilesService.allPairs.length) {
        this.appComponentService.finishGame();
      }
    } else {
      this.tilesService.currentPair.forEach((item) => {
        setTimeout(() => {
          item.selector.classList.remove("flipped", "matched");
          item.selector.setAttribute('data-clicked', 'false');
        }, 1000);
      });
    }

    for (let index in currentItemIndexes) {
      this.tilesService.pexData[index].isMatched = matched;
    }
  }

  pairBoxes(item: any) { // TODO improve type in the future
    if (item === null) {
      return;
    }

    this.statesService.setGameIsTouched();
    this.movesService.increment();

    const flipSound = new Audio(this.tilesService.randomCardFlipSound);
    flipSound.volume = .4;
    flipSound.play();

    if (item.dataset?.['clicked'] === 'false') {
      item.classList.add("flipped");
      item.setAttribute('data-clicked', 'true');

      this.updateVisitedItem(item.dataset?.['id'], item);

      if ((this.tilesService.currentPair.length < 2)) {
        this.tilesService.currentPair.push({selector: item, pairValue: item.dataset?.['pairValue']});

        let currentPairFull = this.tilesService.currentPair.length === 2;
        if (!currentPairFull) {
          return;
        }

        let isPair = this.tilesService.currentPair[0].pairValue === this.tilesService.currentPair[1].pairValue;
        if (isPair) {
          this.updateMatchedItem(item.dataset?.['pairValue']);
          this.tilesService.currentPair = [];
        } else if (!isPair && currentPairFull) {
          this.updateMatchedItem(item.dataset?.['pairValue'], false);
          this.tilesService.currentPair = [];
        }
      }
    }
  }
}

// when button "Start a new game" is clicked (header)
// send variable into (app-classic-game-page)
// and generate Pex items (app-pex-tiles)
