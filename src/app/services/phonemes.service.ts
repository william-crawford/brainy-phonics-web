import {Injectable} from '@angular/core';
import {Phoneme} from '../types/phoneme';
import {BehaviorSubject, Observable} from 'rxjs';

import * as json from '../../assets/json/phonemes.json';
import {SightWord} from '../types/sight-word';

@Injectable({
  providedIn: 'root'
})
export class PhonemesService {

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
  public phonemes: Observable<Phoneme[]>;
  private _phonemes: BehaviorSubject<Phoneme[]>;

  public selectedPhoneme: Phoneme;

  constructor() {
    this._phonemes = new BehaviorSubject<Phoneme[]>(null);
    this.phonemes = this._phonemes.asObservable();
    this.dataLoad();
  }

  dataLoad() {
    const temp = [];
    const data: Array<any> = json.default.valueOf();
    data.forEach(phoneme => {
      temp.push(
        new Phoneme(
          phoneme.id,
          phoneme.display,
          `/resources/audio/phonemes/${phoneme.audio}`,
          new SightWord(
            phoneme.word1.word,
            `/resources/audio/sight-words/${phoneme.word1.audio}`,
            `/resources/images/sight-words/${phoneme.word1.image}`
          ),
          new SightWord(
            phoneme.word2.word,
            `/resources/audio/sight-words/${phoneme.word2.audio}`,
            `/resources/images/sight-words/${phoneme.word2.image}`
          ),
          new SightWord(phoneme.word3.word,
            `/resources/audio/sight-words/${phoneme.word3.audio}`,
            `/resources/images/sight-words/${phoneme.word3.image}`
          ),
          0
        ));
    });
    this._phonemes.next(temp);
  }
}
