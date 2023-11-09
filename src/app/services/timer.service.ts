import {Injectable} from '@angular/core';
import {Observable, Subject, takeUntil, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerDisplay = '00:00';
  timer$: Observable<number> = timer(0, 1000);
  timerCancelNotifier = new Subject<boolean>();

  constructor() {}

  timerStart() {
    this.timerDisplay = '00:00';

    this.timer$.pipe(takeUntil(this.timerCancelNotifier)).subscribe((value) => {
      this.timerDisplay = this.formatTime(value);
    });
  }

  timerStop() {
    this.timerCancelNotifier.next(true);
  }

  timerReset() {
    this.timerDisplay = '00:00';
    this.timerCancelNotifier.next(true);
  }

  private formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime =
      `${minutes > 59 ? `${(hours < 10 ? '0' : '')}:` : ''}${(minutes < 10 ? '0' : '')}${minutes}:${(remainingSeconds < 10 ? '0' : '')}${remainingSeconds}`;

    console.log(formattedTime);

    return formattedTime;
  }
}
