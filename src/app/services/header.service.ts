import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerContentToggle = false;
  headerDifficultySelectElem!: any;

  gameDifficultyEasy!: number;
  gameDifficultyMedium!: number;
  gameDifficultyHell!: number;
  currentGameDifficulty!: number;

  get headerAdditionalContent(): boolean {
    return this.headerContentToggle;
  }

  set headerAdditionalContent(value: boolean) {
    this.headerContentToggle = value;
  }

  get headerDifficultySelect() {
    return this.headerDifficultySelectElem;
  }

  set headerDifficultySelect(element) {
    this.headerDifficultySelectElem = element;
  }
}
