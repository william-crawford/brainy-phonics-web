import { Injectable, Inject } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {TransferLetterService} from './transfer-letter-service.service';
import {AlphabetLettersService} from './alphabet-letters.service';
import {AlphabetLetter} from '../types/alphabet-letter';

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
    return {'gold_stars': 0,
            'silver_stars': 0,
            'active': true, 
            'checkmark':false}
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
    if(this.storage.get(key) != null) {
      input = { 'gold_stars': 5,
                'silver_stars': 0,
                'active': this.storage.get(key).active,
                'checkmark': val}
    }
    return this.storage.set(key, input);
  }

  saveStarsToKey(key, val): void {
    let actualKey = key.slice(0, -4)
    let input;
    if(this.storage.get(actualKey) == null) {
      input = this.prepareNewKeyProgress();
      if(key.includes("gold")) {
        input.gold_stars += val;
      } else {
        input.silver_stars += val;
      }
    } else {
      input = this.storage.get(actualKey);
      if(key.includes("gold")) {
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
}
