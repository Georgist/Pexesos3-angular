import {Injectable} from '@angular/core';
import {pexItem} from '../helpers/pex-data'
import {AppComponentService} from "./app.component.service";
import {HelpersService} from "../helpers/helpers.service";
import {DataService} from "./data.service";
import {PexItem} from "../components/tiles/tiles.types";

@Injectable({
  providedIn: 'root'
})
export class TilesService {
  randomCardFlipSound!: string;

  constructor(
    private dataService: DataService,
    private helpersService: HelpersService,
    private appComponentService: AppComponentService,
  ) {}

  randomCardFlipSoundFn() {
    const randomIndex = Math.floor(Math.random() * this.dataService.cardFlipSounds.length);
    const item = this.dataService.cardFlipSounds[randomIndex];

    return item;
  }
}
