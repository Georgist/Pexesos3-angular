import {AfterViewInit, Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {TilesService} from "../../services/tiles.service";
import {HeaderService} from "../../services/header.service";
import {PexCurrentPair, PexItem} from "./tiles.types";
import {Observable} from "rxjs";
import {AppComponentService} from "../../services/app.component.service";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TilesComponent implements OnInit {
  successSound = new Audio('assets/sounds/success-effect.mp3');
  fanfareSound = new Audio('assets/sounds/fanfare-effect-2.mp3');
  cardFlipSound = new Audio('assets/sounds/pop-effect.mp3');

  constructor(public tilesService: TilesService, public appComponentService: AppComponentService) {}

  ngOnInit() {}

  updateVisitedItem(id: string | undefined, currentItem: HTMLElement) {
    //let currentItemIndex = this.tilesService.pexData.findIndex(item => item.id === Number(id));

    currentItem.classList.add("visited");
    //this.tilesService.pexData[currentItemIndex].isVisited = true;
  }

  updateMatchedItem(pairValue: string | undefined, matched = true) {
    let currentItemIndexes = this.tilesService.pexData.map((elem, index) => (elem.pairValue === pairValue ? index : '')).filter(String);

    if (matched) {
      setTimeout(() => {
        this.successSound.volume = 1;
        this.successSound.play();
      }, 200)

      this.tilesService.currentPair.forEach((item: PexCurrentPair) => {
        item.selector.classList.add("matched");
        item.selector.classList.remove("active");
      });

      let pairIndex = this.tilesService.allPairs.indexOf(String(pairValue)); // TODO check this case
      this.tilesService.allPairs.splice(pairIndex, 1);

      if (!this.tilesService.allPairs.length) {
        this.finishGame();
      }
    } else {
      this.tilesService.currentPair.forEach((item) => {
        setTimeout(() => {
          item.selector.classList.remove("active", "matched");
          item.selector.setAttribute('data-clicked', 'false');
        }, 1000);
      });
    }

    for (let index in currentItemIndexes) {
      this.tilesService.pexData[index].isMatched = matched;
    }
  }

  finishGame() {
    // TODO fix order of sounds, fanfare in the same time as alert()
    setTimeout(() => {
      this.fanfareSound.volume = 0.7;
      this.fanfareSound.play();
    }, 340);
    setTimeout(() => {
      alert('Congratulations, you WON!');
      this.tilesService.resetAll();
    }, 350);
  }

  pairBoxes(item: any) { // TODO improve type in the future
    this.appComponentService.gameIsTouched = true;
    this.cardFlipSound.volume = .6;
    this.cardFlipSound.play();

    if(item === null) {
      return;
    }

    if (item.dataset?.['clicked'] === 'false') {
      item.classList.add("active");
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
