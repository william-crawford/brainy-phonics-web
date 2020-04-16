import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private coins = 0;
  private completePuzzles = [];
  private puzzlePiecesEarned = {};

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

  addPuzzlePieces(puzzlePhoneme, amount) {
    if (puzzlePhoneme in this.puzzlePiecesEarned) {
      this.puzzlePiecesEarned[puzzlePhoneme] += amount;
      if (this.puzzlePiecesEarned[puzzlePhoneme] >= 12) {
        this.puzzlePiecesEarned[puzzlePhoneme] = 12;
        if (!(puzzlePhoneme in this.completePuzzles)) {
          this.savePuzzle(puzzlePhoneme);
        }
      }
    } else {
      this.puzzlePiecesEarned[puzzlePhoneme] = amount;
    }
  }

  getPuzzlePieces(puzzlePhoneme) {
    if (puzzlePhoneme in this.puzzlePiecesEarned) {
      return this.puzzlePiecesEarned[puzzlePhoneme];
    } else {
      return 0;
    }
  }

}
