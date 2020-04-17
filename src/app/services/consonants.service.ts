import {Injectable} from '@angular/core';
import {Consonants} from '../types/consonants';
import {BehaviorSubject, Observable} from 'rxjs';

import * as json from '../../assets/json/phonemes.json';
import {SightWord} from '../types/sight-word';

@Injectable({
  providedIn: 'root'
})
export class ConsonantsService {

  /***
   * When accessing the list of phonemes, subscribe to the observable
   * using phonemes.subscribe() from rxjs. This is done to account for
   * the time where the data is yet to load and will update the observable
   * once the data is loaded.
   *
   * https://blog.logrocket.com/understanding-rxjs-observables/
   *
   * Note: Make sure to save your subscription and unsubscribe by implementing
   * the NgOnDestroy to components.
   */
  public consonants: Observable<Consonants[]>;
  private _consonants: BehaviorSubject<Consonants[]>;

  public selectedVowel: Consonants;

  constructor() {
    this._consonants = new BehaviorSubject<Consonants[]>(null);
    this.consonants = this._consonants.asObservable();
    this.dataLoad();
  }

  dataLoad() {
    const temp = [];
    const data: Array<any> = json.default.valueOf();

    for (var i = 0; i < data.length; i++) {
        if (data[i].category === "C") {
            temp.push(
            new Consonants(
              data[i].id,
              data[i].display,
              `../../assets/audio/phonemes/${data[i].audio}`,
              new SightWord(
                data[i].word1.word,
                `../../assets/audio/sight-words/${data[i].word1.audio}`,
                `../../assets/img/sight-words/${data[i].word1.image}`
              ),
              new SightWord(
                data[i].word2.word,
                `../../assets/audio/sight-words/${data[i].word2.audio}`,
                `../../assets/img/sight-words/${data[i].word2.image}`
              ),
              new SightWord(
                data[i].word3.word,
                `../../assets/audio/sight-words/${data[i].word3.audio}`,
                `../../assets/img/sight-words/${data[i].word3.image}`
              ),
              data[i].color,
              data[i].category,
              0,
              0,
              data[i].rhyme
            ));
        }
    }
    this._consonants.next(temp);
    return temp;
  }
}
