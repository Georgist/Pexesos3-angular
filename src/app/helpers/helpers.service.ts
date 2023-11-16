import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  generateRandomID(): string {
    return Math.random().toString(16).slice(2);
  }

  shuffle(array: any) {
    let m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }}