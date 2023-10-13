import {ElementRef, Injectable, Renderer2, ViewChild} from '@angular/core';
import {pexItem} from '../helpers/pex-data'
import {HeaderService} from "./header.service";
import {PexCurrentPair, PexItem} from "../components/tiles/tiles.types";
import {AppComponentService} from "./app.component.service";

@Injectable({
  providedIn: 'root'
})
export class TilesService {
  timerDisplay: any;

  // TODO add more images (unsplash)
  gameBasicImages: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.png',
    'assets/images/5.jpg',
    'assets/images/6.jpg'
  ];

  gameDifficultyHellImages = 'assets/images/f3.gif';
  pexData: PexItem[] = [];
  allPairs: string[] = [];
  currentPair: PexCurrentPair[] = [];

  renderer!: Renderer2;

  constructor(public headerService: HeaderService, public appComponentService: AppComponentService) {}

  resetAll(): void {
    this.pexData = [];
    this.currentPair = [];
    this.allPairs = [];
    this.appComponentService.gameIsTouched = false;
    this.renderer.removeClass(document.body, 'hell-layout');
    this.renderer.removeClass(document.body, 'medium-layout');
  }

  createPexData(currentDifficulty: number) {
    this.resetAll();

    for (let i = 0; i < (currentDifficulty / 2); i++) {  // divide by 2, we push object into array twice
      let newPexDataItem;

      if (currentDifficulty === this.headerService.gameDifficultyHell) {
        newPexDataItem = new pexItem(this.generateRandomID(), i, this.gameDifficultyHellImages);
      } else {
        newPexDataItem = new pexItem(this.generateRandomID(), i, this.gameBasicImages[i]);
      }

      this.allPairs.push(newPexDataItem.pairValue);
      this.pexData.push(newPexDataItem);

      // push identical data again, but with different IDs, to make pairs
      let duplicatedNewPexItem = Object.assign({}, newPexDataItem);
      duplicatedNewPexItem.id += 1000;
      this.pexData.push(duplicatedNewPexItem);
    }

    let shuffleArray = this.shuffle(this.pexData);
    this.pexData = shuffleArray;
  }

  activateHellDifficulty() {
    this.renderer.addClass(document.body, 'hell-layout');
    this.renderer.addClass(document.body, 'active');

    setTimeout(() => {
      this.renderer.removeClass(document.body, 'active');
      }, 2000);
  }

  activateMediumDifficulty() {
    this.renderer.addClass(document.body, 'medium-layout');
  }

  createAll(currentDifficulty: number) {
    this.createPexData(currentDifficulty);
    if (Number(currentDifficulty) === this.headerService.gameDifficultyHell) {
      this.activateHellDifficulty();
    }
    if (Number(currentDifficulty) === this.headerService.gameDifficultyMedium) {
      this.activateMediumDifficulty();
    }
  }

  // TODO can be separate directive or pipe??
  generateRandomID(): string {
    return Math.random().toString(16).slice(2);
  }

  shuffle(array: any) {
    let m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}
