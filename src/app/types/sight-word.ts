export class SightWord {
    word: string;   // word value
    display: string;   // display value
    audio: string;  // url to audio
    image: string;  // url to image

    constructor(word: string, display: string, audio: string, image: string) {
        this.word = word;
        this.display = display;
        this.audio = audio;
        this.image = image;
    }
}
