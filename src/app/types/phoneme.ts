import {SightWord} from './sight-word';

export class Phoneme {
    id: string;         // unique identifier
    display: string;    // display string
    audio: string;      // url to audio
    word1: SightWord;
    word2: SightWord;
    word3: SightWord;
    stars: number;
    puzzlePiecesEarned: number;


    constructor(id: string, display: string, audio: string, word1: SightWord, word2: SightWord, word3: SightWord, stars: number, puzzlePiecesEarned: number) {
        this.id = id;
        this.display = display;
        this.audio = audio;
        this.word1 = word1;
        this.word2 = word2;
        this.word3 = word3;
        this.stars = stars;
        this.puzzlePiecesEarned = puzzlePiecesEarned;
    }
}
