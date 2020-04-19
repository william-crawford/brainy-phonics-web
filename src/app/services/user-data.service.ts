import { Injectable, Inject } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

const coinKey = 'COINS';
const completePuzzlesKey = 'COMPLETED_PUZZLES';
const puzzlePiecesEarnedKey = 'PUZZLE_PIECES_EARNED';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  addCoins(amount: number) {
    this.storage.set(coinKey, this.getCoins() + amount);
  }

  getCoins(): number {
    return this.storage.get(coinKey) || 0;
  }

  savePuzzle(puzzlePhoneme) {
    var completePuzzles = this.getPuzzles();
    completePuzzles.push(puzzlePhoneme);
    this.storage.set(completePuzzlesKey, completePuzzles);
  }

  getPuzzles() {
    return this.storage.get(completePuzzlesKey) || [];
  }

  addPuzzlePieces(puzzlePhoneme, amount) {
    var puzzlePiecesEarned = this.storage.get(puzzlePiecesEarnedKey) || {};
    if (puzzlePhoneme in puzzlePiecesEarned) {
      puzzlePiecesEarned[puzzlePhoneme] += amount;
      if (puzzlePiecesEarned[puzzlePhoneme] >= 12) {
        puzzlePiecesEarned[puzzlePhoneme] = 12;
        if (!(this.getPuzzles().includes(puzzlePhoneme))) {
          this.savePuzzle(puzzlePhoneme);
        }
      }
    } else {
      puzzlePiecesEarned[puzzlePhoneme] = amount;
    }
    this.storage.set(puzzlePiecesEarnedKey, puzzlePiecesEarned);
  }

  getPuzzlePieces(puzzlePhoneme) {
    var puzzlePiecesEarned = this.storage.get(puzzlePiecesEarnedKey) || {};
    if (puzzlePhoneme in puzzlePiecesEarned) {
      return puzzlePiecesEarned[puzzlePhoneme];
    } else {
      return 0;
    }
  }

}
