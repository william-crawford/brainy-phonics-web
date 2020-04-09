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

  private letters = [];

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,
     private transferLetterService: TransferLetterService,
     private alphabetLettersSerivce: AlphabetLettersService) {
    // this.letters.add(this.transferLetterService.getData());
    // this.letters = this.alphabetLettersSerivce.letters;
    //  this.storage.set()
  }

  //initial each input with { stars: 0, active: false, checkmark: false }
  prepareNewKeyProgress(): any {
    // const letters = 
    // console.log(letters);
    // // this.storage.set(key, val);
    return {'stars': 1,
            'active': true, 
            'checkmark':false}
  }

  getActiveStatus(key): any {
    if (this.storage.get(key) != null) {
      console.log('get active status for: ', key, ', ', this.storage.get(key).active);
      return this.storage.get(key).active;
    } else {
      return 0;
    }
  }

  setActiveStatus(key, val): void {
    let input;
    if(this.storage.get(key) != null) {
      const currentStatus = this.storage.get(key).active;
      console.log("setting active status from: ", currentStatus, " to ", val)
  
      input = { 'stars': this.storage.get(key).stars,
                      'active': val,
                      'checkmark':this.storage.get(key).checkmark}
      console.log("Set active status", input)
      
    } else {
      input = this.prepareNewKeyProgress();
    }
    this.storage.set(key, input);
  }

  getCheckMark(key): any {
    console.log('get checkmark for: ', key, ', ', this.storage.get(key).checkmark);
    return this.storage.get(key).checkmark;
  }

  saveStarsToKey(key, val): void {
    let input;
    console.log(key)
    if(this.storage.get(key) == null) {
      input = this.prepareNewKeyProgress();
    } else {
      if (this.storage.get(key).active == true) {
        let currentStars = this.storage.get(key).stars;
        if (currentStars + val >= 5) {
          input = { 'stars': 5,
                  'active':this.storage.get(key).active,
                  'checkmark': true}
        } else {
          input = { 'stars': this.storage.get(key).stars + val,
          'active':this.storage.get(key).active,
          'checkmark':this.storage.get(key).checkmark}
        }
      } else {
        input = this.storage.get(key)
      }
    }
    console.log("Sent from save stars:", input)
    this.storage.set(key, input);
  }

  getStarsFromKey(key): any {
    let stars = 0;
    if (this.storage.get(key) != null) {
      stars = this.storage.get(key).stars;
    }
    return stars;
  }
}
