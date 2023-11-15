import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GameModesTypes} from "./data.service";
import {AppComponentService} from "./app.component.service";

export enum GameDifficulty {
  easy = 12,
  medium = 24,
  hard = 48,
  hell = 400,
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerContentToggle = false;
  currentDifficulty!: number;

  difficultySubject = new BehaviorSubject(GameDifficulty.easy);
  readonly difficulty$ = this.difficultySubject.asObservable();

  constructor(protected appComponentService: AppComponentService) {}


  get headerAdditionalContent(): boolean {
    return this.headerContentToggle;
  }

  set headerAdditionalContent(value: boolean) {
    this.headerContentToggle = value;
  }

  // TODO possibly improve this
  get isMediumDifficulty() {
    return this.currentDifficulty === GameDifficulty.medium;
  }

  get isHardDifficulty() {
    return this.currentDifficulty === GameDifficulty.hard;
  }

  get isHellDifficulty() {
    return this.currentDifficulty === GameDifficulty.hell;
  }

  getDifficulty(value: Event) {
    this.difficultySubject.next(Number(value));
  }

  setDifficulty() {
    this.currentDifficulty = this.difficultySubject.getValue();
  }
}
