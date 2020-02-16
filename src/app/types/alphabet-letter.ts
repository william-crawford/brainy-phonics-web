export class AlphabetLetter {
    letter: string; // display text
    audio: string;  // url to audio
    stars: number;  // number of stars student has earned

    constructor(letter: string, audio: string, stars: number) {
        this.letter = letter;
        this.audio = audio;
        this.stars = stars;
    }
}
