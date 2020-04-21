import {SightWord} from './sight-word';
import { NumberSymbol } from '@angular/common';

export class Vowels {
    id: string;         // unique identifier
    display: string;    // display string
    audio: string;      // url to audio
    word1: SightWord;
    word2: SightWord;
    word3: SightWord;
    quizWords: [string];
    color: string;
    category: string;
    stars: NumberSymbol;
    puzzlePiecesEarned: number;
    rhyme: string;



    constructor(id: string, display: string, audio: string, word1: SightWord, word2: SightWord, word3: SightWord, quizWords: [string], color: string, category: string, stars: number, puzzlePiecesEarned: number, rhyme: string) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.color = color;
        this.category = category;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
        this.rhyme = rhyme;
    }
}
