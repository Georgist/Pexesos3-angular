import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  gameIsTouched = false;
  gameHasStarted = false;
  gameIsFail = false;
  gameIsSuccess = false;

  constructor() { }
}
