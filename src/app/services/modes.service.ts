import { Injectable } from '@angular/core';
import {GameModesTypes} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class ModesService {
  currentGameMode!: string;

  constructor() { }

  get isHellfireMode() {
    return this.currentGameMode === GameModesTypes.hellfire;
  }
  get isClassicMode() { // default
    return this.currentGameMode === GameModesTypes.classic;
  }
}
