import { Injectable } from '@angular/core';
import {gameModesData, pexItem} from '../helpers/pex-data'
import {PexItem} from "../components/tiles/tiles.types";
import {generateRandomID, shuffle} from "../helpers/helpers";
import {ModesService} from "./modes.service";
import {PairsService} from "./pairs.service";

// TODO what is the best practice? capitalize with css or not
export enum GameModesTypes {
  classic = 'classic',
  speedrun = 'speedrun',
  payToWin = 'pay-to-win',
  hellfire = 'hellfire',
}

export interface GameModes {
  name: string;
  url: string;
  customClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gameModes: GameModes[] = gameModesData;
  pexData: PexItem[] = [];

  successSound = new Audio('assets/sounds/success-effect.mp3');
  fanfareSound = new Audio('assets/sounds/fanfare-effect.mp3');

  cardFlipSounds: string[] = [
    'assets/sounds/pop-effect.mp3',
    'assets/sounds/arrow-wood-effect.mp3',
    'assets/sounds/card-flip-effect.mp3'
  ];

  // TODO add more images (unsplash)
  gameClassicImages: string[] = [
    'assets/images/easy/1.jpg',
    'assets/images/easy/2.jpg',
    'assets/images/easy/3.jpg',
    'assets/images/easy/4.png',
    'assets/images/easy/5.jpg',
    'assets/images/easy/6.jpg',
    'assets/images/easy/7.jpg',
    'assets/images/easy/8.jpg',
    'assets/images/easy/9.jpg',
    'assets/images/easy/10.jpg',
    'assets/images/easy/11.jpg',
    'assets/images/easy/12.jpg',
    'assets/images/easy/13.jpg',
    'assets/images/easy/14.jpg',
    'assets/images/easy/15.jpg',
    'assets/images/easy/16.jpg',
    'assets/images/easy/17.jpg',
    'assets/images/easy/18.jpg',
  ];

  gameHellfireModeImages: string = 'assets/images/f3.gif';

  constructor(
    private modesService: ModesService,
    private pairsService: PairsService,
  ) {}

  resetAllData(): void {
    this.pexData = [];
    this.pairsService.resetCurrentPair();
    this.pairsService.resetAllPairs();
  }

  createPexData(currentDifficulty: number) {
    this.resetAllData();

    // TODO move this to data service, by "difficulty" parameter get appropriate data and amount of data
    for (let i = 0; i < (currentDifficulty / 2); i++) {  // divide by 2, we push object into array twice
      let newPexDataItem: PexItem;

      if (this.modesService.isHellfireMode) {
        newPexDataItem = new pexItem(generateRandomID(), i, this.gameHellfireModeImages);
      } else {
        newPexDataItem = new pexItem(generateRandomID(), i, this.gameClassicImages[i]);
      }

      this.pairsService.createInitialPairs(newPexDataItem.pairValue)
      this.pexData.push(newPexDataItem);

      // push identical data again, but with different IDs, to make pairs
      let duplicatedNewPexItem = Object.assign({}, newPexDataItem);
      duplicatedNewPexItem.id += 1000;
      this.pexData.push(duplicatedNewPexItem);
    }

    let shuffleArray = shuffle(this.pexData);
    this.pexData = shuffleArray;
    console.log(this.pexData.map(item => console.log(item.imageUrl)));
  }
}
