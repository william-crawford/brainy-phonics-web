import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private coins = 0;
  private completePuzzles = [];

  addCoins(amount) {
    this.coins += amount;
  }

  getCoins() {
    return this.coins;
  }

  savePuzzle(puzzlePhoneme) {
    this.completePuzzles.push(puzzlePhoneme);
  }

  getPuzzles() {
    return this.completePuzzles;
  }
}
