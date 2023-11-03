import {Injectable} from '@angular/core';
import {Subject, tap, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameInfoPanelService {
  timeCounted = 0;
  timerDisplay = '00:00';

  movesDisplay = 0;
  movesCounterPair: string[] = [];

  private readonly startTimerSubject = new Subject<void>();
  readonly startTimer$ = this.startTimerSubject.asObservable();
  timerSubscription!: any;

  private readonly movesDisplaySubject = new Subject<void>(); // TODO type number?
  movesDisplay$ = this.movesDisplaySubject.asObservable();
  movesSubscription!: any;

  startTimerNext() {
    this.startTimerSubject.next(undefined);
  }
  timerUnsubscribe() {
    this.timerSubscription.unsubscribe();
  }

  movesDisplayNext() {
    this.movesDisplaySubject.next(undefined);
  }
  movesDisplayUnsubscribe() {
    this.movesDisplay = 0;
    this.movesSubscription.unsubscribe();
  }
}
