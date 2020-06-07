import { Injectable } from '@angular/core';
import { Phoneme } from '../types/phoneme';
import { BehaviorSubject, Observable } from 'rxjs';

import * as json from '../../assets/json/phonemes.json';
import * as jsonReordered from '../../assets/json/phonemes-reordered.json';
import { SightWord } from '../types/sight-word';

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
  }

  dataLoad(list, grade, reordered) {
    const temp = [];
    let data: Array<any> = [];
    if (reordered) {
      data = jsonReordered.default.valueOf();
    } else {
      data = json.default.valueOf();
    }

    for (var i = 0; i < data.length; i++) {
      if (grade !== '') {
        if (data[i].grade.includes(grade)) {
          if (list == 'sounds') {
            temp.push(
              new Phoneme(
                data[i].id,
                data[i].display,
                `/assets/audio/phonemes/${data[i].audio}`,
                new SightWord(
                  data[i].word1.word,
                  data[i].word1.display,
                  `/assets/audio/sight-words/${data[i].word1.audio}`,
                  `/assets/img/sight-words/${data[i].word1.image}`
                ),
                new SightWord(
                  data[i].word2.word,
                  data[i].word2.display,
                  `/assets/audio/sight-words/${data[i].word2.audio}`,
                  `/assets/img/sight-words/${data[i].word2.image}`
                ),
                new SightWord(
                  data[i].word3.word,
                  data[i].word3.display,
                  `/assets/audio/sight-words/${data[i].word3.audio}`,
                  `/assets/img/sight-words/${data[i].word3.image}`
                ),
                data[i]['quiz-words'],
                data[i].color,
                data[i].category,
                0,
                0,
                data[i].rhyme,
                data[i].grade
              ));
          } else {
            if (data[i].category.includes(list)) {
              temp.push(
                new Phoneme(
                  data[i].id,
                  data[i].display,
                  `/assets/audio/phonemes/${data[i].audio}`,
                  new SightWord(
                    data[i].word1.word,
                    data[i].word1.display,
                    `/assets/audio/sight-words/${data[i].word1.audio}`,
                    `/assets/img/sight-words/${data[i].word1.image}`
                  ),
                  new SightWord(
                    data[i].word2.word,
                    data[i].word2.display,
                    `/assets/audio/sight-words/${data[i].word2.audio}`,
                    `/assets/img/sight-words/${data[i].word2.image}`
                  ),
                  new SightWord(
                    data[i].word3.word,
                    data[i].word3.display,
                    `/assets/audio/sight-words/${data[i].word3.audio}`,
                    `/assets/img/sight-words/${data[i].word3.image}`
                  ),
                  data[i]['quiz-words'],
                  data[i].color,
                  data[i].category,
                  0,
                  0,
                  data[i].rhyme,
                  data[i].grade
                ));
            }

          }
        }
      } else {
        if (list == 'phoneme') {
          if (data[i].id !== 'U-short') {
            temp.push(
              new Phoneme(
                data[i].id,
                data[i].display,
                `/assets/audio/phonemes/${data[i].audio}`,
                new SightWord(
                  data[i].word1.word,
                  data[i].word1.display,
                  `/assets/audio/sight-words/${data[i].word1.audio}`,
                  `/assets/img/sight-words/${data[i].word1.image}`
                ),
                new SightWord(
                  data[i].word2.word,
                  data[i].word2.display,
                  `/assets/audio/sight-words/${data[i].word2.audio}`,
                  `/assets/img/sight-words/${data[i].word2.image}`
                ),
                new SightWord(
                  data[i].word3.word,
                  data[i].word3.display,
                  `/assets/audio/sight-words/${data[i].word3.audio}`,
                  `/assets/img/sight-words/${data[i].word3.image}`
                ),
                data[i]['quiz-words'],
                data[i].color,
                data[i].category,
                0,
                0,
                data[i].rhyme,
                data[i].grade
              ));
          }
        } else if (list == 'consonantBlends') {
          if (data[i].category.includes("CB")) {
            temp.push(
              new Phoneme(
                data[i].id,
                data[i].display,
                `/assets/audio/phonemes/${data[i].audio}`,
                new SightWord(
                  data[i].word1.word,
                  data[i].word1.display,
                  `/assets/audio/sight-words/${data[i].word1.audio}`,
                  `/assets/img/sight-words/${data[i].word1.image}`
                ),
                new SightWord(
                  data[i].word2.word,
                  data[i].word2.display,
                  `/assets/audio/sight-words/${data[i].word2.audio}`,
                  `/assets/img/sight-words/${data[i].word2.image}`
                ),
                new SightWord(
                  data[i].word3.word,
                  data[i].word3.display,
                  `/assets/audio/sight-words/${data[i].word3.audio}`,
                  `/assets/img/sight-words/${data[i].word3.image}`
                ),
                data[i]['quiz-words'],
                data[i].color,
                data[i].category,
                0,
                0,
                data[i].rhyme,
                data[i].grade
              ));
          }
        } else if (list == 'consonants') {
          if (data[i].id == 'H-silent') {
            temp.push(
              new Phoneme(
                data[i].id,
                data[i].display,
                `/assets/audio/phonemes/${data[i].audio}`,
                new SightWord(
                  data[i].word1.word,
                  data[i].word1.display,
                  `/assets/audio/sight-words/${data[i].word1.audio}`,
                  `/assets/img/sight-words/${data[i].word1.image}`
                ),
                new SightWord(
                  data[i].word2.word,
                  data[i].word2.display,
                  `/assets/audio/sight-words/${data[i].word2.audio}`,
                  `/assets/img/sight-words/${data[i].word2.image}`
                ),
                new SightWord(
                  data[i].word3.word,
                  data[i].word3.display,
                  `/assets/audio/sight-words/${data[i].word3.audio}`,
                  `/assets/img/sight-words/${data[i].word3.image}`
                ),
                data[i]['quiz-words'],
                data[i].color,
                data[i].category,
                0,
                0,
                data[i].rhyme,
                data[i].grade
              ));
          } else if (data[i].category.includes("C") && !data[i].category.includes("CD") && !data[i].category.includes("CB") && !data[i].category.includes("C-silent")) {
            temp.push(
              new Phoneme(
                data[i].id,
                data[i].display,
                `/assets/audio/phonemes/${data[i].audio}`,
                new SightWord(
                  data[i].word1.word,
                  data[i].word1.display,
                  `/assets/audio/sight-words/${data[i].word1.audio}`,
                  `/assets/img/sight-words/${data[i].word1.image}`
                ),
                new SightWord(
                  data[i].word2.word,
                  data[i].word2.display,
                  `/assets/audio/sight-words/${data[i].word2.audio}`,
                  `/assets/img/sight-words/${data[i].word2.image}`
                ),
                new SightWord(
                  data[i].word3.word,
                  data[i].word3.display,
                  `/assets/audio/sight-words/${data[i].word3.audio}`,
                  `/assets/img/sight-words/${data[i].word3.image}`
                ),
                data[i]['quiz-words'],
                data[i].color,
                data[i].category,
                0,
                0,
                data[i].rhyme,
                data[i].grade
              ));
          }
        } else if (list == 'vowelPairs') {
          if (data[i].category.includes("VP")) {
            temp.push(
              new Phoneme(
                data[i].id,
                data[i].display,
                `../../assets/audio/phonemes/${data[i].audio}`,
                new SightWord(
                  data[i].word1.word,
                  data[i].word1.display,
                  `../../assets/audio/sight-words/${data[i].word1.audio}`,
                  `../../assets/img/sight-words/${data[i].word1.image}`
                ),
                new SightWord(
                  data[i].word2.word,
                  data[i].word2.display,
                  `../../assets/audio/sight-words/${data[i].word2.audio}`,
                  `../../assets/img/sight-words/${data[i].word2.image}`
                ),
                new SightWord(
                  data[i].word3.word,
                  data[i].word3.display,
                  `/assets/audio/sight-words/${data[i].word3.audio}`,
                  `/assets/img/sight-words/${data[i].word3.image}`
                ),
                data[i]['quiz-words'],
                data[i].color,
                data[i].category,
                0,
                0,
                data[i].rhyme,
                data[i].grade
              ));
          }
        } else if (list == 'vowels') {
          if (data[i].category.includes("V") && !data[i].category.includes("VP") && !data[i].category.includes("VC")) {
            temp.push(
              new Phoneme(
                data[i].id,
                data[i].display,
                `/assets/audio/phonemes/${data[i].audio}`,
                new SightWord(
                  data[i].word1.word,
                  data[i].word1.display,
                  `/assets/audio/sight-words/${data[i].word1.audio}`,
                  `/assets/img/sight-words/${data[i].word1.image}`
                ),
                new SightWord(
                  data[i].word2.word,
                  data[i].word2.display,
                  `/assets/audio/sight-words/${data[i].word2.audio}`,
                  `/assets/img/sight-words/${data[i].word2.image}`
                ),
                new SightWord(
                  data[i].word3.word,
                  data[i].word3.display,
                  `/assets/audio/sight-words/${data[i].word3.audio}`,
                  `/assets/img/sight-words/${data[i].word3.image}`
                ),
                data[i]['quiz-words'],
                data[i].color,
                data[i].category,
                0,
                0,
                data[i].rhyme,
                data[i].grade
              ));
          }
        } else if (list == 'vowelConsonants') {
          if (data[i].category.includes("VC")) {
            temp.push(
              new Phoneme(
                data[i].id,
                data[i].display,
                `/assets/audio/phonemes/${data[i].audio}`,
                new SightWord(
                  data[i].word1.word,
                  data[i].word1.display,
                  `/assets/audio/sight-words/${data[i].word1.audio}`,
                  `/assets/img/sight-words/${data[i].word1.image}`
                ),
                new SightWord(
                  data[i].word2.word,
                  data[i].word2.display,
                  `/assets/audio/sight-words/${data[i].word2.audio}`,
                  `/assets/img/sight-words/${data[i].word2.image}`
                ),
                new SightWord(
                  data[i].word3.word,
                  data[i].word3.display,
                  `/assets/audio/sight-words/${data[i].word3.audio}`,
                  `/assets/img/sight-words/${data[i].word3.image}`
                ),
                data[i]['quiz-words'],
                data[i].color,
                data[i].category,
                0,
                0,
                data[i].rhyme,
                data[i].grade
              ));
          }
        }
      }
    }
    this._phonemes.next(temp);
    return temp;
  }
}
