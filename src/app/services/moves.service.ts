import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovesService {
  movesDisplay = 0;
  movesCounterPair: string[] = [];

  constructor() {}

  movesReset() {
    this.movesDisplay = 0;
  }

  movesIncrement() {
    this.movesCounterPair.push('pair');

    if(this.movesCounterPair.length === 2) {
      this.movesDisplay++;
      this.movesCounterPair = [];
    }
  }
}
