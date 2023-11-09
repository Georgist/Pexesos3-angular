import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovesService {
  movesDisplay = 0;
  movesCounterPair: string[] = [];

  constructor() {}

  reset() {
    this.movesDisplay = 0;
  }

  increment() {
    this.movesCounterPair.push('pair');

    if(this.movesCounterPair.length === 2) {
      this.movesDisplay++;
      console.log(this.movesDisplay);
      this.movesCounterPair = [];
    }
  }
}
