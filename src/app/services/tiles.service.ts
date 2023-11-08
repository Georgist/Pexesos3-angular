import {HostBinding, Injectable, Renderer2} from '@angular/core';
import {pexItem} from '../helpers/pex-data'
import {HeaderService} from "./header.service";
import {PexCurrentPair, PexItem} from "../components/tiles/tiles.types";
import {AppComponentService} from "./app.component.service";
import {TimerService} from "./timer.service";
import {HelpersService} from "../helpers/helpers.service";

@Injectable({
  providedIn: 'root'
})
export class TilesService {
  @HostBinding('class.medium-layout') mediumLayout!: boolean;

  randomCardFlipSound!: string;

  cardFlipSounds: string[] = [
    'assets/sounds/pop-effect.mp3',
    'assets/sounds/arrow-wood-effect.mp3',
    'assets/sounds/card-flip-effect.mp3'
  ];

  // TODO add more images (unsplash)
  gameBasicImages: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.png',
    'assets/images/5.jpg',
    'assets/images/6.jpg'
  ];

  gameDifficultyMediumImages: string[] = [
    'assets/images/medium/1.jpg',
    'assets/images/medium/2.jpg',
    'assets/images/medium/3.jpg',
    'assets/images/medium/4.jpg',
    'assets/images/medium/5.jpg',
    'assets/images/medium/6.jpg',
    'assets/images/medium/7.jpg',
    'assets/images/medium/8.jpg',
    'assets/images/medium/9.jpg',
    'assets/images/medium/10.jpg',
    'assets/images/medium/11.jpg',
    'assets/images/medium/12.jpg'
  ];

  //gameDifficultyHellImages = 'assets/images/f3.gif';

  pexData: PexItem[] = [];
  allPairs: string[] = [];
  currentPair: PexCurrentPair[] = [];

  renderer!: Renderer2;

  constructor(
    private helpersService: HelpersService,
    public headerService: HeaderService,
  ) {}

  resetAllData(): void {
    this.pexData = [];
    this.currentPair = [];
    this.allPairs = [];
  }

  createPexData(currentDifficulty: number) {
    this.resetAllData();

    if(currentDifficulty === this.headerService.gameDifficultyMedium) {
      this.mediumLayout = true;
    }

    for (let i = 0; i < (currentDifficulty / 2); i++) {  // divide by 2, we push object into array twice
      let newPexDataItem;

      if(currentDifficulty === this.headerService.gameDifficultyMedium) {
        newPexDataItem = new pexItem(this.helpersService.generateRandomID(), i, this.gameDifficultyMediumImages[i]);
      } else {
        newPexDataItem = new pexItem(this.helpersService.generateRandomID(), i, this.gameBasicImages[i]);
      }

      this.allPairs.push(newPexDataItem.pairValue);
      this.pexData.push(newPexDataItem);

      // push identical data again, but with different IDs, to make pairs
      let duplicatedNewPexItem = Object.assign({}, newPexDataItem);
      duplicatedNewPexItem.id += 1000;
      this.pexData.push(duplicatedNewPexItem);
    }

    let shuffleArray = this.helpersService.shuffle(this.pexData);
    this.pexData = shuffleArray;
  }

  randomCardFlipSoundFn() {
    const randomIndex = Math.floor(Math.random() * this.cardFlipSounds.length);
    const item = this.cardFlipSounds[randomIndex];

    return item;
  }
}
