import {PexItem} from "../components/tiles/tiles.types";
import {GameModes} from "../services/data.service";

// TODO perhaps move to Data service
export class pexItem implements PexItem {
  constructor(
    public pairValue: string,
    public id: number,
    public imageUrl: string | string[],
    public isFlipped = false,
    public isVisited = false,
    public isMatched = false,
  ) {}
}

// TODO I get error when name: GameModesTypes.classic,
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
    name: 'payToWin',
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
