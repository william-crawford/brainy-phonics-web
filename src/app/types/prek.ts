import {SightWord} from './sight-word';

export class Prek {
    id: string;         // unique identifier
    display: string;    // display string
    audio: string;      // url to audio
    word1: SightWord;
    word2: SightWord;
    word3: SightWord;
    quizWords: [string];
    stars: number;
    rhyme: string;
    grade: [string];
    category: [string];


    constructor(id: string, display: string, audio: string, word1: SightWord, word2: SightWord, word3: SightWord, quizWords: [string], stars: number, rhyme: string, category: [string], grade: [string]) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.quizWords = quizWords;
        this.stars = stars;
        this.rhyme = rhyme;
        this.category = category;
        this.grade = grade;
    }
}
