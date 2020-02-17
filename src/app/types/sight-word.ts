export class SightWord {
    word: string;   // word value
    audio: string;  // url to audio
    image: string;  // url to image

    constructor(word: string, audio: string, image: string) {
        this.word = word;
        this.audio = audio;
        this.image = image;
    }
}
