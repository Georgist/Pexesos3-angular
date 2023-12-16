import {Injectable} from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class TilesService {
  randomCardFlipSound!: string;

  constructor(
    private dataService: DataService,
  ) {}

  randomCardFlipSoundFn() {
    const randomIndex = Math.floor(Math.random() * this.dataService.cardFlipSounds.length);
    const item = this.dataService.cardFlipSounds[randomIndex];

    return item;
  }
}
