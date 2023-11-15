import {PexItem} from "../components/tiles/tiles.types";
import {GameModes} from "../services/data.service";

// TODO perhaps move to Data service
export class pexItem implements PexItem {
  pairValue: string;
  id: number;
  imageUrl: string | string[];
  isFlipped: boolean;
  isVisited: boolean;
  isMatched: boolean;

  constructor(pairValue: string, id: number, imageUrl: string | string[], isFlipped = false, isVisited = false, isMatched = false) {
    this.pairValue = pairValue;
    this.id = id;
    this.imageUrl = imageUrl;
    this.isFlipped = isFlipped;
    this.isVisited = isVisited;
    this.isMatched = isMatched;
  }
}

// TODO what is the best practice? capitalize with css or not
export const gameModesData: GameModes[] = [
  {
    //name: GameModesTypes.classic,
    name: 'classic',
    url: '/classic',
    customClass: 'classic'
  },
  {
    //name: GameModesTypes.speedrun,
    name: 'speedrun',
    url: '/speedrun',
    customClass: 'disabled'
  },
  {
    //name: GameModesTypes.payToWin,
    name: 'pay-to-win',
    url: '/pay-to-win',
    customClass: 'disabled'
  },
  {
    //name: GameModesTypes.hellfire,
    name: 'hellfire',
    url: '/hellfire',
    customClass: 'hellfire'
  }
]
