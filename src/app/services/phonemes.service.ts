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

  dataLoad(list, reordered) {
    const temp = [];
    let data: Array<any> = [];
    if (reordered) {
      data = jsonReordered.default.valueOf();
    } else {
      data = json.default.valueOf();
    }

    let imgArr = [];
    let audioArr = [];
    let bothArr = [];
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i]['quiz-words'].length; j++) {
        var img = new XMLHttpRequest();
        img.open('HEAD', "../../assets/img/sight-words/" + data[i]['quiz-words'][j] + ".png", false);
        img.send();
        var mp3 = new XMLHttpRequest();
        mp3.open('HEAD', "../../assets/audio/sight-words/" + data[i]['quiz-words'][j] + ".mp3", false);
        mp3.send();
        if (!(img.status!=404) && !(mp3.status!=404)) {
          if ((bothArr.indexOf(data[i]['quiz-words'][j]) == -1)) {
            bothArr.push(data[i]['quiz-words'][j]);
          }
        } else if (!(img.status!=404)) {
          if ((imgArr.indexOf(data[i]['quiz-words'][j]) == -1)) {
            imgArr.push(data[i]['quiz-words'][j]);
          }
        } else if (!(mp3.status!=404)) {
          if ((audioArr.indexOf(data[i]['quiz-words'][j]) == -1)) {
            audioArr.push(data[i]['quiz-words'][j]);
          }
        }
      }
    }
    console.log('imgArr:', imgArr.toString());
    console.log('audioArr:', audioArr.toString());
    console.log('bothArr:', bothArr.toString());
    
    // for (var i = 0; i < data.length; i++) {
    //   if (list == 'phoneme') {
    //     if (data[i].id !== 'U-short' && data[i].id !== 'A-e') {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == 'consonantBlends') {
    //     if (data[i].category.includes("CB")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == 'consonants') {
    //     if (data[i].id == 'H-silent') {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     } else if (data[i].category.includes("C") && !data[i].category.includes("CD") && !data[i].category.includes("CB") && !data[i].category.includes("C-silent")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == 'vowelPairs') {
    //     if (data[i].category.includes("VP")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `../../assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `../../assets/audio/sight-words/${data[i].word1.audio}`,
    //             `../../assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `../../assets/audio/sight-words/${data[i].word2.audio}`,
    //             `../../assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == 'vowels') {
    //     if (data[i].category.includes("V") && !data[i].category.includes("VP") && !data[i].category.includes("VC")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == 'vowelConsonants') {
    //     if (data[i].category.includes("VC")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == 'kindergarten') {
    //     if (data[i].grade.includes("K")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == 'prek') {
    //     if (data[i].grade.includes("Pre-K")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == '1st') {
    //     if (data[i].grade.includes("1st")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == '2nd') {
    //     if (data[i].grade.includes("2nd")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   } else if (list == '3rd') {
    //     if (data[i].grade.includes("3rd")) {
    //       temp.push(
    //         new Phoneme(
    //           data[i].id,
    //           data[i].display,
    //           `/assets/audio/phonemes/${data[i].audio}`,
    //           new SightWord(
    //             data[i].word1.word,
    //             data[i].word1.display,
    //             `/assets/audio/sight-words/${data[i].word1.audio}`,
    //             `/assets/img/sight-words/${data[i].word1.image}`
    //           ),
    //           new SightWord(
    //             data[i].word2.word,
    //             data[i].word2.display,
    //             `/assets/audio/sight-words/${data[i].word2.audio}`,
    //             `/assets/img/sight-words/${data[i].word2.image}`
    //           ),
    //           new SightWord(
    //             data[i].word3.word,
    //             data[i].word3.display,
    //             `/assets/audio/sight-words/${data[i].word3.audio}`,
    //             `/assets/img/sight-words/${data[i].word3.image}`
    //           ),
    //           data[i]['quiz-words'],
    //           data[i].color,
    //           data[i].category,
    //           0,
    //           0,
    //           data[i].rhyme,
    //           data[i].grade
    //         ));
    //     }
    //   }
    // }
    this._phonemes.next(temp);
    return temp;
  }
}
