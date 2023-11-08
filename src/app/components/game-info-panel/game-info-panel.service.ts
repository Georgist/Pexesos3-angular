import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameInfoPanelService {
  movesDisplay = 0;
  movesCounterPair: string[] = [];

  private readonly movesDisplaySubject = new Subject<void>(); // TODO type number?
  movesDisplay$ = this.movesDisplaySubject.asObservable();
  movesSubscription!: any;

  movesDisplayNext() {
    this.movesDisplaySubject.next(undefined);
  }
  movesDisplayUnsubscribe() {
    this.movesDisplay = 0;
    this.movesSubscription.unsubscribe();
  }
}
