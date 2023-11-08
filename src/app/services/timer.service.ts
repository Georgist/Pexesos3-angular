import {Injectable} from '@angular/core';
import {Observable, Subject, takeUntil, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerDisplay = '00:00:00';
  timer$: Observable<number> = timer(0, 1000);
  timerCancelNotifier = new Subject();

  constructor() {}

  timerStop() {
    this.timerCancelNotifier.next(undefined);
  }

  timerReset() {
    this.timerDisplay = '00:00:00';
    this.timerCancelNotifier.next(undefined);
  }

  timerStart() {
    this.timerDisplay = '00:00:00';

    // TODO pause timer when modal is open

    this.timer$.pipe(takeUntil(this.timerCancelNotifier)).subscribe((value) => {
      this.timerDisplay = this.formatTime(value);
    });
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // TODO add condition for hours
    const formattedTime =
      `${(hours < 10 ? '0' : '')}${hours}:${(minutes < 10 ? '0' : '')}${minutes}:${(remainingSeconds < 10 ? '0' : '')}${remainingSeconds}`;

    return formattedTime;
  }
}
