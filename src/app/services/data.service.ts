import { Injectable } from '@angular/core';
import {gameModesData, pexItem} from '../helpers/pex-data'
import {PexCurrentPair, PexItem} from "../components/tiles/tiles.types";
import {HelpersService} from "../helpers/helpers.service";
import {ModesService} from "./modes.service";

// TODO what is the best practice? capitalize with css or not
export enum GameModesTypes {
  classic = 'classic',
  speedrun = 'speedrun',
  payToWin = 'pay-to-win',
  hellfire = 'hellfire',
}

export interface GameModes {
  //name: GameModesTypes;
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
  currentPair: PexCurrentPair[] = [];
  allPairs: string[] = [];

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
    'assets/images/easy/1.jpg',
    'assets/images/easy/2.jpg',
    'assets/images/easy/3.jpg',
    'assets/images/easy/4.png',
    'assets/images/easy/5.jpg',
    'assets/images/easy/6.jpg',
    'assets/images/easy/1.jpg',
    'assets/images/easy/2.jpg',
    'assets/images/easy/3.jpg',
    'assets/images/easy/4.png',
    'assets/images/easy/5.jpg',
    'assets/images/easy/6.jpg',
    'assets/images/easy/1.jpg',
    'assets/images/easy/2.jpg',
    'assets/images/easy/3.jpg',
    'assets/images/easy/4.png',
    'assets/images/easy/5.jpg',
    'assets/images/easy/6.jpg',
  ];

/*  gameDifficultyMediumImages: string[] = [
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
  ];*/

  gameHellfireModeImages: string = 'assets/images/f3.gif';

  constructor(
    private helpersService: HelpersService,
    private modesService: ModesService,
  ) {}

  resetAllData(): void {
    this.pexData = [];
    this.currentPair = [];
    this.allPairs = [];
  }

  createPexData(currentDifficulty: number) {
    this.resetAllData();

    // TODO move this to data service, by "difficulty" parameter get appropriate data and amount of data
    for (let i = 0; i < (currentDifficulty / 2); i++) {  // divide by 2, we push object into array twice
      let newPexDataItem;

      if(this.modesService.isHellfireMode) {
        newPexDataItem = new pexItem(this.helpersService.generateRandomID(), i, this.gameHellfireModeImages);
      } else {
        newPexDataItem = new pexItem(this.helpersService.generateRandomID(), i, this.gameClassicImages[i]);
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

}
