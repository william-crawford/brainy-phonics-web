import {Injectable, Inject} from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

const coinKey = 'COINS';
const completePuzzlesKey = 'COMPLETED_PUZZLES';
const timeKey = 'TIME_LAST_SESSION';
const timeOverallKey = 'TIME_OVERALL';
const dateKey = 'DATE_LAST_SESSION';

@Injectable({
  providedIn: 'root'
})

export class ProgressService {

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {
    this.storage.set('hasReceivedPhonemeInstruction', false);
    this.storage.set('hasReceivedAlphabetInstruction', false);
  }

  getReceivedInstructions(key) {
    return this.storage.get(key);
  }

  setReceivedInstructions(key, hasRecInstructions) {
    this.storage.set(key, hasRecInstructions); 
  }

  //initial each input with { stars: 0, active: false, checkmark: false }
  prepareNewKeyProgress(): any {
    return {
      'gold_stars': 0,
      'silver_stars': 0,
      'active': true,
      'checkmark': false,
      'coins': 0,
      'puzzle_pieces': 0,
      'incorrect_answers': 0
    }
  }

  getCheckMark(key): any {
    if (this.storage.get(key) != null) {
      return this.storage.get(key).checkmark;
    } else {
      return false;
    }
  }

  setCheckMark(key, val): any {
    let input;
    if (this.storage.get(key) != null) {
      input = this.storage.get(key);
      input.gold_stars = 5
      input.silver_stars = 0,
      input.active = this.storage.get(key).active;
      input.checkmark = val;
    }
    return this.storage.set(key, input);
  }

  saveStarsToKey(key, val): void {
    let actualKey = key.slice(0, -4)
    let input;
    if (this.storage.get(actualKey) == null) {
      input = this.prepareNewKeyProgress();
      if (key.includes("gold")) {
        input.gold_stars += val;
      } else {
        input.silver_stars += val;
      }
    } else {
      input = this.storage.get(actualKey);
      if (key.includes("gold")) {
        if (input.gold_stars + val >= 5 && actualKey.includes("letter")) {
          input.checkmark = true;
          input.gold_stars = 5;
        } else if (input.gold_stars + val >= 5) {
          input.gold_stars = 5;
        } else {
          input.gold_stars += val;
        }
      } else if (input.gold_stars + val < 5) {
        if (input.silver_stars + val >= 5) {
          input.silver_stars = 5;
        } else {
          input.silver_stars += val;
        }
      }
    }
    this.storage.set(actualKey, input);
  }

  getGoldStarsFromKey(key): any {
    let stars = 0;
    if (this.storage.get(key) != null) {
      stars = this.storage.get(key).gold_stars;
    }
    return stars;
  }

  getSilverStarsFromKey(key): any {
    let stars = 0;
    if (this.storage.get(key) != null) {
      stars = this.storage.get(key).silver_stars;
    }
    return stars;
  }

  getCoins(): number {
    return this.storage.get(coinKey) || 0;
  }

  addCoins(key: string, amount: number) {
    let input;
    if (this.storage.get(key) == null) {
      input = this.prepareNewKeyProgress();
      input.coins += amount;
    } else {
      input = this.storage.get(key);
      input.coins += amount;
    }
    // Save coin amount for phoneme
    this.storage.set(key, input);
    // Save coins overall
    this.storage.set(coinKey, this.getCoins() + amount);
  }

  getPuzzles() {
    return this.storage.get(completePuzzlesKey) || [];
  }

  savePuzzle(puzzlePhoneme) {
    var completePuzzles = this.getPuzzles();
    completePuzzles.push(puzzlePhoneme);
    this.storage.set(completePuzzlesKey, completePuzzles);
  }

  getPuzzlePieces(puzzlePhoneme) {
    let actualKey = 'phoneme' + puzzlePhoneme;
    let puzzlePieces = 0;
    if (this.storage.get(actualKey) != null) {
      puzzlePieces = this.storage.get(actualKey).puzzle_pieces;
    }
    return puzzlePieces;
  }

  addPuzzlePieces(puzzlePhoneme: string, amount: number) {
    let actualKey = 'phoneme' + puzzlePhoneme;
    let input;
    if (this.storage.get(actualKey) == null) {
      input = this.prepareNewKeyProgress();
      input.puzzle_pieces += amount;
    } else {
      input = this.storage.get(actualKey);
      input.puzzle_pieces += amount;

      if (input.puzzle_pieces >= 12) {
        input.puzzle_pieces = 12;
        if (!(this.getPuzzles().includes(puzzlePhoneme))) {
          this.savePuzzle(puzzlePhoneme);
        }
      }
    }
    this.storage.set(actualKey, input);
  }

  addIncorrectAnswer(key) {
    let input;
    // If phoneme isn't mastered
    if (!this.getCheckMark(key)) {
      if (this.storage.get(key) == null) {
        input = this.prepareNewKeyProgress();
        input.incorrect_answers++;
      } else {
        input = this.storage.get(key);
        input.incorrect_answers++;
      }
      console.log(input);
      this.storage.set(key, input);
    }
  }

  addTime(date, timeElapsed) {
    console.log('date is:', date);
    // Time spent in current session (in ms)
    this.storage.set(timeKey, timeElapsed);
    // Time spent in application overall (in ms)
    if (this.storage.get(timeKey) !== null) {
      var lastSession = this.storage.get(timeKey);
      this.storage.set(timeOverallKey, lastSession + timeElapsed);
    } else {
      this.storage.set(timeOverallKey, timeElapsed);
    }
    // Date of current session
    this.storage.set(dateKey, date);
  }
}
