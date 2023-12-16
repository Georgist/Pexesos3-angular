import { Injectable } from '@angular/core';
import {PexCurrentPair} from "../components/tiles/tiles.types";

@Injectable({
  providedIn: 'root'
})

export class PairsService {
  currentPair: PexCurrentPair[] = [];
  allPairs: string[] = [];
  currentLength = 0;
  initialLength = 0;

  createInitialPairs(pairs: string): void {
    this.allPairs.push(pairs);

    const pairsLength = this.allPairs.length;
    this.initialLength = pairsLength;
  }

  updateAllPairs(itemToRemove: string) {
    this.allPairs = this.allPairs.filter((item) => item !== itemToRemove);

    this.currentLength = this.initialLength - this.allPairs.length;
  }

  get allPairsIsEmpty() {
    return !this.allPairs.length;
  }

  updateCurrentPair(item: PexCurrentPair['selector']) {
    this.currentPair.push({selector: item, pairValue: item.dataset?.['pairValue']});
  }

  get currentPairIsFull() {
    return this.currentPair.length === 2;
  }

  get isPair() {
    return this.currentPair[0]?.pairValue === this.currentPair[1]?.pairValue;
  }

  resetCurrentPair(): void {
    this.currentPair = [];
  }

  resetAllPairs(): void {
    this.allPairs = [];
  }
}
