import {Injectable} from '@angular/core';
import {AlphabetLetter} from '../types/alphabet-letter';
import {BehaviorSubject, Observable} from 'rxjs';

import * as json from '../../assets/json/letters.json';
import * as jsonReordered from '../../assets/json/letters-reordered.json';

@Injectable({
  providedIn: 'root'
})
export class AlphabetLettersService {

  /***
   * When accessing the list of alphabet letters, subscribe to the observable
   * using letters.subscribe() from rxjs. This is done to account for
   * the time where the data is yet to load and will update the observable
   * once the data is loaded.
   *
   * https://blog.logrocket.com/understanding-rxjs-observables/
   *
   * Note: Make sure to save your subscription and unsubscribe by implementing
   * the NgOnDestroy to components.
   */
  public letters: Observable<AlphabetLetter[]>;
  private _letters: BehaviorSubject<AlphabetLetter[]>;

  constructor() {
    this._letters = new BehaviorSubject<AlphabetLetter[]>(null);
    this.letters = this._letters.asObservable();
  }

  dataImport(reordered) {
    const temp = [];
    let data: Array<any> = [];
    if (reordered) {
      data = jsonReordered.default.valueOf();
    } else {
      data = json.default.valueOf();
    }
    data.forEach(letter => {
      temp.push(new AlphabetLetter(letter.letter, `/assets/audio/letters/${letter.audio}`, 0));
    });
    return data;
  }
}
